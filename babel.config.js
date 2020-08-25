module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-partial-application',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // [
    //   '@babel/plugin-transform-runtime',
    //   {
    //     regenerator: true,
    //   },
    // ],
  ],
  presets: [['@babel/env', { modules: false }]],
  env: {
    test: {
      presets: [['@babel/env', {}]],
    },
  },
};
