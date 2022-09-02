const defaultConfig = require('app/tailwind.config')
module.exports = {
  ...defaultConfig,
  plugins: [
    // require('nativewind/tailwind/css'),
    require('daisyui')]
}
