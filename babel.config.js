module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
  env: {
    test: {
      presets: ['@babel/env'],
    },
  },
};
