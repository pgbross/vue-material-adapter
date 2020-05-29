/* eslint-disable quote-props */
module.exports = {
  testPathIgnorePatterns: ['/.c9/', '/node_modules/', '/demo/'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  modulePathIgnorePatterns: ['<rootDir>/packages'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@material/)'],
  moduleNameMapper: {
    '^\\/([^\\/]+)': '<rootDir>/packages/$1/index',
    '^~/(.*)': '<rootDir>/packages/$1',
  },
};
