/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#072951",
      },
      fontSize: {
        "hero-header": "48px",
      },
      lineHeight: {
        "hero-header": "58.51px",
      },
      fontWeight: {
        "hero-header": 500,
      },
      borderRadius: {
        '12': '12px',
      },
      padding: {
        'btn-padding': '20px 30px',
      },
      spacing: {
        'btn-gap': '10px',
      },
      width: {
        'hug': '272px',
      },
      height: {
        'hug': '74px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
