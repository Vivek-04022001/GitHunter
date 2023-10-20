/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: '#FFD700',
          // Define other light mode colors here
        },
        dark: {
          primary: "#333333",
          // Define other dark mode colors here
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
