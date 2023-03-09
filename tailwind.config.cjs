/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cloud-bg": "url('src/assets/Tabs/Cloud bg.png')",
        "life-sciences-bg": "url('src/assets/Tabs/Life Sciences bg.jpeg')",
      },
    },
  },
  plugins: [],
};
