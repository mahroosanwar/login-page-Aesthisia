/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white_A700_b2: "#ffffffb2",
        gray_400: "#bfbfbf",
        blue_gray_100: "#d9d9d9",
        teal_500: "#08a593",
        blue_gray_500_87: "#66708587",
        black_900: "#020100",
        white_A700_4f: "#ffffff4f",
        blue_gray_500: "#667085",
        blue_gray_700_83: "#46466083",
        black_900_6b: "#0201006b",
        blue_gray_700: "#464660",
        white_A700: "#ffffff",
      },
      boxShadow: { bs: "0px 20px  32px 0px #0201006b" },
      fontFamily: { poppins: "Poppins", inter: "Inter", lato: "Lato" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
