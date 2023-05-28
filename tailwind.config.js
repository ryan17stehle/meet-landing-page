/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aqua': '#4d96a9',
        'dark-purple': '#855fb1',
        'black': '#28283d',
        'gray': '#87879d',
        'teal': '#8fe3f9',
        'light-purple': '#d9b8ff',
        'white': '#fafafa'
      },
      fontSize: {
        'h1': ['64px', '64px'],
        'h2': ['40px', '44px'],
        'body': ['18px', '26px'],
        'overline': ['16px', '26px'],
        'med': ['32px', '36px'],
      },
      fontWeight: {
        'boldest': '900',
        'base': '500'
      },
      backgroundImage: {
        'footer-pattern-mobile': "url('../../public/mobile/image-footer.jpg')",
        'footer-pattern-tablet': "url('../../public/tablet/image-footer.jpg')",
        'footer-pattern-desktop': "url('../../public/desktop/image-footer.jpg')",
      }
    },
  },
  plugins: [],
}
