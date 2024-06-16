/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#1AECDF',
      },
      backgroundImage: {
        'multi-pattern': "url('/assets/fon1.png'), url('/assets/fon2.png'), url('/assets/fon3.png'), url('/assets/fon4.png'), url('/assets/fon5.png'), url('/assets/fon6.png')"
      },
      backgroundPosition: {
        'multi-pattern-pos': 'top left, bottom right, center, top right, bottom left, center center'
      },
      backgroundSize: {
        'multi-pattern-size': 'cover, contain, 50% 50%, cover, contain, 60% 60%'
      }
    },
  },
  plugins: [],
}

