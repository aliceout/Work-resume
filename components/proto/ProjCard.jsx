import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import ThemeTags from "./ThemeTags";

const PALETTE_VARS = [
  "var(--slate-d)",
  "var(--terra-d)",
  "var(--steel-d)",
  "var(--plum-d)",
];

const parseDate = (date) => {
  if (!date) return { yr: "", rest: "" };
  const yearsMatch = date.match(/(\d{4})(?:\s*[-–]\s*(\d{4}))?/);
  if (!yearsMatch) return { yr: "", rest: date.trim() };

  const yr = yearsMatch[2]
    ? `${yearsMatch[1]} - ${yearsMatch[2]}`
    : yearsMatch[1];

  const rest = date
    .replace(yearsMatch[0], "")
    .trim()
    .replace(/^[-–·\s]+/, "")
    .replace(/[-–·\s]+$/, "")
    .replace(/\s+[-–·]\s+/g, " · ")
    .trim();

  return { yr, rest };
};

function ProjThumb({ index, picture, title, onClick }) {
  if (picture) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="proto-thumb proto-thumb-img"
        aria-label={`Agrandir l'image du projet ${title || ""}`}
      >
        <Image
          src={picture}
          alt={title || ""}
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          style={{ objectFit: "cover" }}
        />
      </button>
    );
  }

  const stroke = PALETTE_VARS[index % PALETTE_VARS.length];
  return (
    <div className="proto-thumb">
      <svg
        viewBox="0 0 200 100"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        opacity="0.7"
        width="70%"
      >
        <rect x="12" y="10" width="176" height="80" rx="6" />
        <line x1="24" y1="28" x2="100" y2="28" />
        <line x1="24" y1="42" x2="140" y2="42" />
        <line x1="24" y1="56" x2="80" y2="56" />
        <rect x="24" y="70" width="44" height="10" rx="2" />
      </svg>
    </div>
  );
}

function ProjModal({ picture, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="proto-modal-overlay" onClick={onClose}>
      <button
        type="button"
        className="proto-modal-close"
        onClick={onClose}
        aria-label="Fermer"
      >
        ×
      </button>
      <div
        className="proto-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={picture} alt={title || ""} />
      </div>
    </div>
  );
}

export default function ProjCard({ project, index = 0, themesMeta }) {
  const [open, setOpen] = useState(false);
  if (!project) return null;
  const { yr, rest } = parseDate(project.year);
  const hasTags = (project.themes || []).length > 0;
  const hasRepo = !!project.repo;
  return (
    <>
      <article className="proto-proj">
        <div className="proto-date">
          <div className="proto-yr">{yr}</div>
          {rest && <div>{rest}</div>}
          {hasRepo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="proto-github-tag"
            >
              <Icon name="github" size={12} /> GitHub
            </a>
          )}
        </div>
        <div className="proto-proj-body">
          <h4>{project.title}</h4>
          {project.org && (
            <div className="proto-org">
              <span>{project.org}</span>
            </div>
          )}
          {project.desc && <p>{project.desc}</p>}
          {hasTags && (
            <div className="proto-proj-actions">
              <ThemeTags themes={project.themes} themesMeta={themesMeta} />
            </div>
          )}
        </div>
        <ProjThumb
          index={index}
          picture={project.picture}
          title={project.title}
          onClick={() => setOpen(true)}
        />
      </article>
      {open && project.picture && (
        <ProjModal
          picture={project.picture}
          title={project.title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
