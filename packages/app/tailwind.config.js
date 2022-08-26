/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    '../../packages/app/src/**/*.{js,jsx,ts,tsx}'
  ]
  ,
  theme: {
    extend: {}
  },
  darkMode: 'class',
  // important: 'html',
  plugins: [
    require('nativewind/tailwind/css')
    // require('daisyui')
  ]
}
