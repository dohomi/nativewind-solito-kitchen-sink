/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    '../../packages/app/{features,navigation,provider,components}/**/*.{js,jsx,ts,tsx}'
  ]
  ,
  theme: {
    extend: {}
  },
  // important: 'html',
  plugins: [
    'nativewind/tailwind/css'
  ]
}
