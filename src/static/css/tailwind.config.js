/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
  { pattern: /^(w|h|md:w|md:h)-\[(240|300|360|420|480|600|720)px\]$/ },
  { pattern: /^(top|bottom|left|right)-(0|10|20|40)$/ },
  { pattern: /^(glow-slow-sm|glow-slow-md|glow-slow-lg|glow-slow-xl)$/ },
  { pattern: /^(opacity)-(20|30|40|50|60)$/ },
  { pattern: /^(glow-accent-bg|glow-primary-bg)$/ },
  ],
}