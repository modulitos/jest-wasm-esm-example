// https://jestjs.io/docs/en/ecmascript-modules
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',
  // testEnvironment: 'jest-environment-node',
  // roots: ['<rootDir>/'],
  transform: {},
  // transform: {
  //   '\\.(js|jsx)?$': 'babel-jest',
  //   "\\.(ts|tsx)$": "ts-jest"
  // },

  // testMatch: [' "**/?(*.)(spec|test).?(m)js?(x)"'],
  testMatch: ['<rootDir>/__tests__/test_jest.test.?(m)js'],

  moduleFileExtensions: [ 'json', 'node', 'tsx', 'ts', 'js', 'jsx','mjs'],
  // testPathIgnorePatterns: ['/node_modules/', '/public/'],
  // testPathIgnorePatterns: ['/public/'],
  // setupFilesAfterEnv: [
  //   // "./setupJest.js",
  //   // 'jest-dom/extend-expect',
  //   // 'react-testing-library/cleanup-after-each'
  // ],
  // https://github.com/facebook/jest/issues/2702#issuecomment-636853186
  // "transformIgnorePatterns": ["node_modules/(?!(bin_packer_3d|package_2)/)"],
  // "transformIgnorePatterns": ["node_modules/bin_packer_3d/(?!(bin_packer_3d_bg.wasm|package_2)/)"],
  // "resolver": "jest-module-field-resolver"
};
