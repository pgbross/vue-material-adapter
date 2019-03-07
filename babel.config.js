var config = {
  comments: true,
  plugins: [
    '@babel/transform-object-assign',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-dynamic-import'
  ],
  presets: [['@babel/preset-env', { modules: false }]],
  env: {
    test: {
      plugins: [
        '@babel/proposal-object-rest-spread',
        '@babel/syntax-dynamic-import'
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' }
          }
        ]
      ]
    }
  }
}

module.exports = config
