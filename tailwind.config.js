/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        tight: ['"Inter Tight"', '"Inter"', "sans-serif"],
        serif: ['"Fraunces"', '"Iowan Old Style"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
          4: "var(--ink-4)",
        },
        surface: {
          DEFAULT: "var(--bg)",
          tint: "var(--bg-tint)",
          "tint-2": "var(--bg-tint-2)",
          card: "var(--bg-card)",
        },
        line: {
          DEFAULT: "var(--line)",
          d: "var(--line-d)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          d: "var(--accent-d)",
        },
        azur:    { DEFAULT: "var(--azur)",    d: "var(--azur-d)" },
        rouge:   { DEFAULT: "var(--rouge)",   d: "var(--rouge-d)" },
        mousse:  { DEFAULT: "var(--mousse)",  d: "var(--mousse-d)" },
        indigo:  { DEFAULT: "var(--indigo)",  d: "var(--indigo-d)" },
        magenta: { DEFAULT: "var(--magenta)", d: "var(--magenta-d)" },
        lagune:  { DEFAULT: "var(--lagune)",  d: "var(--lagune-d)" },
        soleil:  { DEFAULT: "var(--soleil)",  d: "var(--soleil-d)" },
        prune:   { DEFAULT: "var(--prune)",   d: "var(--prune-d)" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
