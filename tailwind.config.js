/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        hht: { max: "1023px" },
        hhp: { max: "768px" },
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        sidebar: "var(--bg-sidebar)",
        toolbar: "var(--bg-toolbar)",
        second: "var(--bg-second)",
        theme: "var(--bg-theme)",
        field: "var(--bg-field)",
        menu: "var(--bg-menu)",
      },
      outlineColor: {
        items: "var(--items-color)",
      },
      textColor: {
        "primary-text": "var(--primary-text-color)",
        "second-text": "var(--second-text-color)",
        "items-text": "var(--items-text-color)",
        "white-text": "var(--white-text-color)",
      },
      borderColor: {
        separator: "var(--bd-separator)",
        field: "var(--bd-field)",
      },
    },
  },

  plugins: [],
};
