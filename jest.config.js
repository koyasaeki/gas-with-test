/** @type {import('jest').Config} */
const config = {
  silent: false,
  verbose: false,
  globals: {
    SpreadsheetApp: {},
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(src/.+(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'js'],
};

module.exports = config;
