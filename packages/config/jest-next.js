module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['**/src/**/*.{js,ts,jsx,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null,
};
