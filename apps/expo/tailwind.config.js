const defaultConfig = require('app/tailwind.config')
module.exports = {
  ...defaultConfig,
  theme: {
    // extend: {
    //   colors: {
    //     primary: 'var(--primary)',
    //     secondary: 'var(--secondary)',
    //     main: 'var(--main)',
    //     background: 'var(--background)',
    //     header: 'var(--header)',
    //     accent: 'var(--accent)'
    //   }
    // }
  },
  plugins: [
    require('nativewind/tailwind/css')
    // require('daisyui')
  ]
}
