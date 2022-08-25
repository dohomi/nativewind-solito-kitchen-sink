const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')
const extraNodeModules = require("node-libs-react-native");

const config = getDefaultConfig(__dirname)

// Monorepo
const projectRoot = __dirname
const workspaceRoot = path.resolve(__dirname, '../..')

config.watchFolders = [...config.watchFolders, './.storybook', workspaceRoot]
config.resolver.resolverMainFields = [
  'sbmodern',
  "react-native",
  ...config.resolver.resolverMainFields
]
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules')
]
config.resolver.extraNodeModules = extraNodeModules;

module.exports = config
