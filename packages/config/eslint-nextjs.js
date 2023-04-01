module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['next', 'plugin:import/recommended', 'plugin:import/typescript', 'prettier', 'plugin:cypress/recommended'],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'prefer-const': 'error',
    'no-var': 'error',
    'import/no-duplicates': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-target-blank': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^next', '^@', '^~', '^[a-z]'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    'import/default': 'off',
    'react/jsx-key': 'off',
    '@next/next/no-html-link-for-pages': 'off',

    'cypress/no-unnecessary-waiting': 'off',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': ['off', { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] }],
      },
    },
  ],
  ignorePatterns: ['node_modules', '.next', 'coverage', 'dist', '*/config/*'],
};
