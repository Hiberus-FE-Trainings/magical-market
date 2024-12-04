const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: 'tsconfig.eslint.json' },
  plugins: ['@typescript-eslint', 'prettier', 'check-file'],
  rules: {
    'no-console': 'error',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'prettier/prettier': PROD ? 'error' : 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'warn',
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'lodash',
            importNames: ['default'],
            message:
              'Please import only the methods that you use, e.g. import { xyz } from lodash.',
          },
        ],
      },
    ],
  },
  overrides: [],
  ignorePatterns: [],
}
