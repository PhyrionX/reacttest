module.exports = {
  ...require('build-tools-jest'),
  ...require('build-tools-babel-jest'),
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styles.js',
    '\\.(svg)$': '<rootDir>/__mocks__/svg.js'
  }
}