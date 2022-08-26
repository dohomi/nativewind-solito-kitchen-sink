import path from 'path'

const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/app/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'solito',
          'react-native-vector-icons',
          'nativewind',
          'app'
        ],
        babelPlugins: [
          'react-native-reanimated/plugin',
          'react-native-paper/babel'
          // 'nativewind/babel'
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
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })


    // config.module.rules.push({
    //   test: /\.ttf$/,
    //   loader: "url-loader", // or directly file-loader
    //   include: path.resolve(__dirname, "../node_modules/react-native-vector-icons"),
    // });
    config.module.rules.push({
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      loader: "file-loader", // or directly file-loader
      include: path.resolve(__dirname, "../node_modules/react-native-vector-icons"),
    });

    return {
      ...config
    }
  }

}
export default config