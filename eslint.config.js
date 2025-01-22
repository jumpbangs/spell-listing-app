import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'src/setupTests.ts',
      'src/reportWebVitals.ts',
      'node_modules/',
      'build/',
      'public/',
      'src/models',
      '.eslintrc.js',
      'lint-staged.js',
      'src/test/*',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'error',
      'no-shadow': 'off',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'no-useless-catch': 'warn',
      'no-nested-ternary': 'warn',
      'prefer-arrow-callback': 'warn',
      'no-restricted-syntax': ['error', 'FunctionExpression', 'FunctionDeclaration'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'function', next: 'function' },
        { blankLine: 'always', prev: 'function', next: 'block' },
        { blankLine: 'always', prev: 'block', next: 'function' },
      ],
      'comma-dangle': [2, 'always-multiline'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Mui packages
            ['^@mui'],
            // Internal packages.
            ['^(components|services|pages|features|store|utils|routes|types)(/.*|$)'],
            // Internal packages.
            ['^()(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  }
);
