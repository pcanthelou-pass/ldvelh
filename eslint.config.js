const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

//TODO: Read https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'dist/*',
      '/.expo/*',
      '/.app-archive/*',
      '/.github/*',
      '/.vscode/*',
      '/.yarn/*',
      '/docs/*',
      'node_modules',
    ],
    files: ['*.ts', '*.tsx', '*.d.ts'],
    languageOptions: { project: './tsconfig.json' },
  },
])
