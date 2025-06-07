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
            '@core': './src/core/index.ts',
            '@features': './src/app/',
            '@index': './src/app/index.tsx',
            '@services': './src/shared/services/index.ts',
            '@shared': './src/shared/index.ts',
            '@navigation': './src/navigation/index.ts',
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
