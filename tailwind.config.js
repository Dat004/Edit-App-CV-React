/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundColor: {
        theme: "var(--bg-theme)",
        sidebar: "var(--bg-sidebar)",
        menu: "var(--bg-menu)",
        field: "var(--bg-field)",
      },
      textColor: {
        "primary-text": "var(--primary-text-color)",
        "white-text": "var(--white-text-color)",
      },
      borderColor: {
        field: "var(--bd-field)",
      }
    },
  },

  plugins: [],
};
