/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-30px) translateX(10px) rotate(5deg)' },
          '50%': { transform: 'translateY(-20px) translateX(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-30px) translateX(10px) rotate(5deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-25px) translateX(-15px) rotate(-8deg)' },
          '50%': { transform: 'translateY(-15px) translateX(15px) rotate(8deg)' },
          '75%': { transform: 'translateY(-25px) translateX(-15px) rotate(-8deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) translateX(20px) rotate(10deg)' },
          '50%': { transform: 'translateY(-10px) translateX(-20px) rotate(-10deg)' },
          '75%': { transform: 'translateY(-20px) translateX(20px) rotate(10deg)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}