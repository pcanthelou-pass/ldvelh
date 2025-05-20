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
            '@core': './app/core/',
            '@features': './app/features/',
            '@index': './app/index.tsx',
            '@services': './app/shared/services/index.ts',
            '@shared': './app/shared/',
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
