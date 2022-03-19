const path = require('path');

module.exports = {
  stories: ['../src/**/**/*.stories.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/styles')
    });

    return {
      ...config,
      plugins: [...config.plugins],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@styles': path.resolve(__dirname, '../src/styles/'),
          '@components': path.resolve(__dirname, '../src/components/'),
          '@services': path.resolve(__dirname, '../src/services/__mocks__'),
          '@pages': path.resolve(__dirname, '../pages/'),
          '@templates': path.resolve(__dirname, '../src/templates/'),
          '@utils': path.resolve(__dirname, '../src/utils/')
        }
      }
    };
  }
  /*
  "core": {
    "builder": "storybook-builder-vite"
  },
  */
  /*
  viteFinal: (config) => {
    config.plugins = [
      ...config.plugins,
      require('@preact/preset-vite').default()
    ]

    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 1200
    }
    return config
  }
  */
};
