const config = require('../next/postcss.config')

module.exports = {
  ...config,
  'nativewind/postcss': {
    output: 'nativewind-output.js'
  }
}