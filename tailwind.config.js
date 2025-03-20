/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Use 'class' strategy for dark mode
  content: [
    "./index.html", // Add the HTML file for the content path
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000', // Custom dark background color
        'dark-text': '#f5f5f5', // Custom text color for dark mode
      },
    },
  },
  plugins: [],
};
