/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        sidebar: "var(--bg-sidebar)",
        toolbar: "var(--bg-toolbar)",
        second: "var(--bg-second)",
        theme: "var(--bg-theme)",
        field: "var(--bg-field)",
        menu: "var(--bg-menu)",
      },
      textColor: {
        "primary-text": "var(--primary-text-color)",
        "items-text": "var(--items-text-color)",
        "white-text": "var(--white-text-color)",
      },
      borderColor: {
        field: "var(--bd-field)",
      }
    },
  },

  plugins: [],
};
