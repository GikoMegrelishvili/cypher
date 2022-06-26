/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        cypher: "url('/assets/images/cypher.jpg')",
      },
      fontFamily: {
        primary: ["Primary", "sans-serif"],
        secondary: ["Secondary", "sans-serif"],
        "accent-regular": ["Accent-Regular", "sans-serif"],
        "accent-bold": ["Accent-Bold", "sans-serif"],
        "accent-light": ["Accent-Light", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        100: "#5C5C5C",
        200: "#525252",
        300: "#474747",
        400: "#3D3D3D",
        500: "#333333",
        600: "#292929",
        700: "#1F1F1F",
        800: "#141414",
        900: "#0A0A0A",
      },
      white: {
        100: "#FAFAFA",
        200: "#F5F5F5",
        300: "#EBEBEB",
        400: "#E0E0E0",
        500: "#D6D6D6",
        600: "#CCCCCC",
        700: "#C2C2C2",
        800: "#B8B8B8",
        900: "#ADADAD",
      },
      primary: {
        100: "#B299EA",
        200: "#9878E3",
        300: "#7E56DC",
        400: "#441F98",
        500: "#3C1C87",
        600: "#351877",
        700: "#2D1565",
        800: "#261254",
        900: "#1E0E43",
      },
      secondary: {
        100: "#C7C2FF",
        200: "#B4ADFF",
        300: "#A299FF",
        400: "#8F85FF",
        500: "#695CFF",
        600: "#5747FF",
        700: "#311FFF",
        900: "#1400F5",
        900: "#1300E0",
      },
      accent: {
        100: "#FAB3C2",
        200: "#F78DA4",
        300: "#F67994",
        400: "#F46786",
        500: "#F14167",
        600: "#EF2E58",
        700: "#EE1B49",
        900: "#E4113F",
        900: "#BE0E34",
      },
    },
  },
  plugins: [],
};
