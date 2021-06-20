module.exports = {
  collectCoverage: true,
  rootDir: './',
  testRegex: './packages/.+\\.test\\.js',
  transformIgnorePatterns: [
    'node_modules/(?!(crypto-es'
      + ')/)',
  ],
};
