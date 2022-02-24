module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        openSans: ["Open Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
