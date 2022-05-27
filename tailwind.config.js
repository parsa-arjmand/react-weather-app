module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1073px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "760px", min: "662px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "662px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
