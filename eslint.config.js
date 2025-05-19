const { defineConfig } = require('eslint/config')
const universeNative = require('eslint-config-universe/flat/native')
const universeSharedTSAnalysis = require('eslint-config-universe/flat/shared/typescript-analysis')
const expoConfig = require('eslint-config-expo/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

//TODO: Read https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks

https: module.exports = defineConfig([
  // universeNative,
  // universeSharedTSAnalysis,
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
