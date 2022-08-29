const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const path = require('path')
const withTM = require('next-transpile-modules')([
  'solito',
  'nativewind',
  'react-native-vector-icons',
  'app'
])

const transform = withPlugins([withTM, [withFonts, { projectRoot: __dirname }], withImages, withExpo])

/** @type {import('next').NextConfig} */
const config = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      type: 'asset/resource',
      include: path.resolve(__dirname, 'node_modules/react-native-paper')
    })
    return config
  }
}

module.exports = function(name, { defaultConfig }) {
  return transform(name, {
    ...defaultConfig,
    ...config,
    webpack5: true,
    reactStrictMode: true
  })
}
