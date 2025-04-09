/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#faf8f6',
        'primary': '#2c3e50',
        'secondary': '#e67e22',
        'text-primary': '#2c3e50',
        'text-secondary': '#34495e',
        'accent': '#e74c3c',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'lato': ['Lato', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 