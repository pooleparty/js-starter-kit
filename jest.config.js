module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: ['./__testSetup__/index.js'],
  unmockedModulePathPatterns: ['babel-core'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
};
