/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/solar.jpg')",
      },
      spacing: {
        '104': '26rem',
        '110': '27rem',
        'half-screen': '50vh',
        '18': '4.5rem'
      },
      animation: {
        fade: 'fadeIn 5s ease-in-out',
      },
    },
  },
  plugins: [],
}

