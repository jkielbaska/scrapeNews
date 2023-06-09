/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        base: "#18122B",
        logo: "#635985",
        mviolet: "#443C68",
        dviolet: "#393053",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "25v": "25vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "80%": "80%",
        90: "22.5rem",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
      maxWidth: {
        "10r": "10rem",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)"],
        gruppo: ["var(--font-gruppo)"],
      },
    },
  },
  plugins: [],
};
