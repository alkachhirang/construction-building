/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerbg': "url('./assets/images/png/header-bg-img.png')",
        'helpbg':"url('./assets/images/png/Help-bg-img.png')",
      },
      backgroundsize: {
        'bgsize': "100% 100%",
      },
      screens: {
        '3xl':'1400px',
        '4xl': '1700px',
      }
    },
  },
  plugins: [],
}

