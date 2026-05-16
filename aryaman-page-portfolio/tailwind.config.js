/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        "surface-01": "var(--surface-01)",
        "surface-02": "var(--surface-02)",
        border: "var(--border)",
        fire: "var(--fire)",
        cold: "var(--cold)",
        bone: "var(--bone)",
        ghost: "var(--ghost)",
        "glow-fire": "var(--glow-fire)",
        "glow-cold": "var(--glow-cold)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
