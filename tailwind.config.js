/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Newsreader', 'Georgia', 'serif'],
        headline: ['Newsreader', 'Lora', 'Georgia', 'serif'],
        masthead: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        editorial: {
          crimson: '#be123c',
          darkred: '#881337',
          navy: '#090d16',
          ink: '#0f172a',
          body: '#334155',
          paper: '#ffffff',
          warmbg: '#fbfbf9',
          border: '#e2e8f0',
          card: '#ffffff',
          accent: '#b91c1c',
          tag: '#f1f5f9'
        }
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -4px rgba(0, 0, 0, 0.04)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
