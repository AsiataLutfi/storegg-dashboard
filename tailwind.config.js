const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        1.5: "6px",
        7.5: "30px",
        12.5: "50px",
        15: "60px",
      },
      colors: {
        downriver: {
          secondary: "#7E8CAC",
          primary: "#0C145A",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
