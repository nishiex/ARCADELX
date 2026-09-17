/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Bricolage Grotesque', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-body)', 'Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        pink: 'var(--pink)',
        ink: 'var(--ink)',
      },
    },
  },
  plugins: [],
};
