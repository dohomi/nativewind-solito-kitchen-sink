const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    // "storybook-addon-next",
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'solito',
          'react-native-vector-icons',
          'dripsy',
          '@dripsy/core',
          'moti',
          'nativewind',
          'app'
        ],
        babelPlugins: [
          'react-native-reanimated/plugin',
          ['nativewind/babel', { mode: 'transformOnly' }]
        ]
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  // typescript: { reactDocgen: false },
  webpackFinal: async (config, { configType }) => {
    // config.resolve.fallback = {
    //     stream: require.resolve("stream-browserify"),
    //     path: require.resolve("path-browserify"),
    // };

    return {
      ...config
    }
  }

}
export default config