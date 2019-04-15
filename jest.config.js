/* eslint-disable quote-props */
module.exports = {
  testPathIgnorePatterns: ['/.c9/', '/node_modules/', '/demo/'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@material/)'],
  moduleNameMapper: {
    '^@mcwv\\/([^\\/]+)': '<rootDir>/packages/mcwv-$1/index',
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.dev.js',
  },
};
