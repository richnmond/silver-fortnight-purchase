/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#1E40AF', // Blbue
            secondary: '#FBBF24', // Yellow
            accent: '#EF4444', // Red
            background: '#F3F4F6', // Light Gray
            textPrimary: '#111827', // Dark Gray
            textSecondary: '#6B7280', // Medium Gray
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
  },
  plugins: [],
};
