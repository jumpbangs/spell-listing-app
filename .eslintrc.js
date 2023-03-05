module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn'],
      },
    ],
    semi: [2, 'always'],
    eqeqeq: [2, 'always'],
    'eol-last': [2, 'always'],
    'no-unused-vars': 1,
    'no-unreachable': 2,
    'no-multi-spaces': 2,
    'space-before-blocks': 2,
    'newline-before-return': 2,
    'no-unexpected-multiline': 2,
    'react/display-name': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.js'],
    },
  ],
};
