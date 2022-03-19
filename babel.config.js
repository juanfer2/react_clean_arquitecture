/*
const presets =
  process.env['NODE_ENV'] !== 'production'
    ? [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    : null

const plugins =
  process.env['NODE_ENV'] !== 'production'
    ? [['babel-plugin-transform-vite-meta-env']]
    : null

module.exports = { presets, plugins }
*/

module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    'babel-plugin-transform-vite-meta-env'
  ],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        'babel-plugin-transform-vite-meta-env'
      ]
    }
  }
};
