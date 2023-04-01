const customJestConfig = {
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  collectCoverageFrom: ['**/src/**/*.{js,ts,jsx,tsx}', '**/{components,hooks,utils}/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2|ico)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.(js|ts)$': ['babel-jest', { presets: ['next/babel'] }],
    '<rootDir>/node_modules/rehype-external-links/': ['babel-jest', { presets: ['next/babel'] }],
  },
  coverageThreshold: null,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [],
};

module.exports = customJestConfig;
