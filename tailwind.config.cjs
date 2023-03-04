/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cloud-bg": "url('src/assets/Cloud-bg.png')",
      },
    },
  },
  plugins: [],
};
