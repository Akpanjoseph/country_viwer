module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color:{
      Dark_Blue: "hsl(209, 23%, 22%)",
      Very_Dark_Blue: "hsl(207, 26%, 17%)",
      Dark_Gray : "hsl(0, 0%, 52%)",
      Very_Light_Gray : "hsl(0, 0%, 98%)",
      white : "hsl(0, 0%, 100%)"
    },
    screen:{
      sm: "375px",
      md: "1440px",
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}