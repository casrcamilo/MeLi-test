export default {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:express/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'node', 'express', 'prettier'],
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // General code quality rules
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'unicorn/catch-error-name': ['error', { name: 'error' }],
    'unicorn/no-null': 'error',

    // Security rules
    'security/detect-object-injection': 'warn',

    // Consistency and styling rules
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/prefer-interface': 'off',

    // Node.js and Express.js specific rules
    'node/no-missing-import': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-unsupported-features/es-syntax': 'off',
    'express/no-unused-vars': 'error',

    // Prettier rules
    'prettier/prettier': 'error',
  },
};
