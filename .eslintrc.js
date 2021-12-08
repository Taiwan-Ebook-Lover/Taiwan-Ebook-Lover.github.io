module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  rules: {
    'no-console': 'warn',
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
