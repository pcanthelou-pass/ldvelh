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
            '@index': './src/app/index.tsx',
            '@features': './src/screens',
            '@core': './src/core/index.ts',
            '@actions': './src/core/actions/index.ts',
            '@api': './src/core/api',
            '@components': './src/core/components/index.ts',
            '@contexts': './src/core/contexts/index.ts',
            '@hooks': './src/core/hooks/index.ts',
            '@stores': './src/core/stores/index.ts',
            '@types': './src/core/types/index.ts',
            '@navigation': './src/navigation/index.ts',
            '@shared': './src/shared/index.ts',
            '@helpers': './src/shared/helpers/index.ts',
            '@services': './src/shared/services/index.ts',
            '@ui': './src/shared/ui/index.ts',
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
