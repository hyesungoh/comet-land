module.exports = {
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  collectCoverageFrom: ['**/src/**/*.{js,ts,jsx,tsx}', '**/core/{components,hooks,utils}/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|ico)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  coverageThreshold: null,
};
