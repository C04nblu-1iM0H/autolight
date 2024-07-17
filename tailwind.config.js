/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/page/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-white': '#FFFFFF', // Добавьте белый цвет для кнопки
        'button-blue': '#0110CF',  // Основной цвет кнопки
        'button-black': '#000000', // Цвет при hover
      },
      screens: {
        'mid-range': {'min': '1535px', 'max': '1830px'}, // кастомный брейкпоинт
      },
    },
    fontFamily: {
      TTNormsProBold: ["TTNormsProBold", "sans-serif"],
      TTNormsProMedium: ["TTNormsProMedium", "sans-serif"],
      TTNormsProRegular: ["TTNormsProRegular", "sans-serif"],
    },
    backgroundImage: {
      'header-fon': "url(/public/header.svg)",
      'xlheader-fon': "url(/public/xlheader.svg)",
      'mdheader-fon':"url(/public/lgheader.svg)",
      'mobileHeader-fon':"url(/public/mobileHeader.svg)",
      'epsilonblur':'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(213,215,240,1) 0%, rgba(213,215,240,1) 100%)',
      'epsilonblurmob':'linear-gradient(90.21deg, #D5D7F0 61.63%, rgba(213, 215, 240, 0) 102.66%)',

    }
  },
  plugins: [],
}