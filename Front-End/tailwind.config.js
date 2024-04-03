// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['10.25rem'],
        'med':['5.188rem'],
        's' : ['0.75rem']
      },
      fontFamily: {
        display: ["Italiana", ...defaultTheme.fontFamily.sans],
        display2:["Inria Serif", "serif"],
        display3:[ "Inter", "sans-serif"],
        display4:["Abhaya Libre", "serif"],
        display5:["Allerta Stencil", "sans-serif"],
        display6:[ "Alike", "serif"],
        display7:["Alegreya SC", "serif"],
        Roboto:["Roboto", "sans-serif"],
        Inter:[ "Inter", "sans-serif"],
        Sync:["Syne", "sans-serif"],
        Work_Sans:["Work Sans", "sans-serif"],
        LED_Dot_Matrix:[ 'LED Dot-Matrix',"sans-serif"],
        Lavishly_Yours:["Lavishly Yours", "cursive"],
        IBM_Plex:["IBM Plex Serif", "serif"],
      },
      textColor: {
        "Royal-Golden": '#A99155',
        "crinze-Purple": '#EC8EEE',
        "lighter-Gray": "#54575F",
      },
      fontWeight:{
        'light':300,
        'lighter':400,
        'hard':800,
        'light-hard':700,
      },
      colors: {
        'light-Green': '#CBD7BD',
        'light-Purple': '#D2C4DD',
        'light-Yellow': '#CDC9A4',
        'leaf-Green' : '#8DCA68',
        'shiny-Purple': '#C78DD1',
        'dark-Yellow': '#B3A73F',
        'yellow-round': '#C4ED50',
        "unique-gray": '#393E46',
        "Royal-Golden": '#A99155',
        "sweet-Purple" : '#CC00FF',
        "pappy-brown" : "#7C613E"
      },
    },
  },
};
