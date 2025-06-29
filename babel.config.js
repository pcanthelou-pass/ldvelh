module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo']],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            '@assets': './assets',
            '@features': './src/screens',
            '@actions': './src/core/actions',
            '@api': './src/core/api',
            '@components': './src/core/components',
            '@contexts': './src/core/contexts',
            '@hooks': './src/core/hooks',
            '@stores': './src/core/stores',
            '@types': './src/core/types',
            '@navigation': './src/navigation',
            '@helpers': './src/shared/helpers',
            '@services': './src/shared/services',
            '@ui': './src/shared/ui',
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.test.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      ],
    ],
  }
}
