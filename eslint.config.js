import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import tslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue,
      prettier,
      '@typescript-eslint': tslint,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'vue/multi-word-component-names': 'off',
    },
  },
]
