/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'ember-dark': {
          100: '#3d3d3d',
          200: '#2b2b2b',
          300: '#1e1e1e',
          400: '#161616'
        },
        'ember-accent': '#1dbaaf',
        'ember-accent-hover': '#09a096'
      }
    }
  },
  plugins: []
};
