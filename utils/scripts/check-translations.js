const fs = require("fs");
const path = require("path");

const localesDir = path.join(process.cwd(), "public", "locales");
const languages = fs
  .readdirSync(localesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

if (languages.length === 0) {
  console.error("No locale folders found in public/locales.");
  process.exit(1);
}

function collectJsonFiles(baseDir, relativeDir = "") {
  const currentDir = path.join(baseDir, relativeDir);
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      files.push(
        ...collectJsonFiles(baseDir, path.join(relativeDir, entry.name))
      );
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(path.join(relativeDir, entry.name));
    }
  }

  return files;
}

function readNamespace(language, namespace) {
  const filePath = path.join(localesDir, language, namespace);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file ${namespace} for language ${language}`);
  }
  const raw = fs.readFileSync(filePath, "utf8");
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `Invalid JSON in ${language}/${namespace}: ${error.message}`
    );
  }
}

function compareStructures(reference, candidate, pointer, issues) {
  const refType = Array.isArray(reference) ? "array" : typeof reference;
  const candType = Array.isArray(candidate) ? "array" : typeof candidate;

  if (refType !== candType) {
    issues.push(
      `Type mismatch at ${pointer}: expected ${refType}, received ${candType}`
    );
    return;
  }

  if (refType === "object" && reference !== null) {
    const refKeys = Object.keys(reference);
    const candKeys = Object.keys(candidate || {});

    for (const key of refKeys) {
      if (!(key in candidate)) {
        issues.push(`Missing key at ${pointer}.${key}`);
      } else {
        compareStructures(
          reference[key],
          candidate[key],
          `${pointer}.${key}`,
          issues
        );
      }
    }

    for (const key of candKeys) {
      if (!(key in reference)) {
        issues.push(`Unexpected key at ${pointer}.${key}`);
      }
    }
    return;
  }

  if (refType === "array") {
    if (!Array.isArray(candidate)) {
      issues.push(`Expected array at ${pointer}`);
      return;
    }

    if (reference.length !== candidate.length) {
      issues.push(
        `Array length mismatch at ${pointer}: expected ${reference.length}, received ${candidate.length}`
      );
    }

    const minLength = Math.min(reference.length, candidate.length);

    for (let index = 0; index < minLength; index += 1) {
      compareStructures(
        reference[index],
        candidate[index],
        `${pointer}[${index}]`,
        issues
      );
    }
  }
}

function verifyNamespace(namespace) {
  const referenceLanguage = languages[0];
  const reference = readNamespace(referenceLanguage, namespace);

  for (const language of languages.slice(1)) {
    const candidate = readNamespace(language, namespace);
    const issues = [];

    compareStructures(
      reference,
      candidate,
      namespace.replace(/\.json$/, ""),
      issues
    );

    if (issues.length > 0) {
      console.error(`❌ ${namespace} (${referenceLanguage} vs ${language})`);
      issues.forEach((issue) => console.error(`   • ${issue}`));
      return false;
    }

    console.log(`✅ ${namespace} (${referenceLanguage} vs ${language})`);
  }

  return true;
}

const namespaces = collectJsonFiles(path.join(localesDir, languages[0])).sort();

let success = true;

for (const namespace of namespaces) {
  try {
    const ok = verifyNamespace(namespace);
    success = success && ok;
  } catch (error) {
    console.error(`❌ ${namespace}: ${error.message}`);
    success = false;
  }
}

if (!success) {
  process.exit(1);
}

console.log("All translation namespaces are consistent.");
