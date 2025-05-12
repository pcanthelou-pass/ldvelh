module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo']],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            '@index': './app/index.tsx',
            '@core': './app/core/',
            '@shared': './app/shared/',
            '@services': './app/shared/services/index.ts'
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
            '.json'
          ]
        }
      ]
    ]
  };
};
