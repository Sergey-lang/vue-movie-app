import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue,
      prettier,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'vue/multi-word-component-names': 'off',
    },
  },
]
