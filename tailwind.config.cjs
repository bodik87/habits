/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myRed: "#F87267",
        myGreen: "#55F2A1",
        mySalad: "#daeb69",
        myYellow: "#FEE36E",
        myPink: "#FC98B4",
        myViolet: "#8A78EE",
        myBlue: "#53D0F0",
        myWhite: "#F8F8F8",
        myDark: "#050505",
      },
    },
  },
  plugins: [],
};
