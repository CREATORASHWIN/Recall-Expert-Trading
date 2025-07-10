/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',   // Blue shade
        secondary: '#F59E0B', // Amber shade
        accent: '#10B981',    // Emerald green
        background: '#F3F4F6', // Light gray
        textPrimary: '#111827', // Dark gray for text
      },
    },
  },
  plugins: [],
}