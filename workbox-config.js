module.exports = {
  globDirectory: './docs/',
  globPatterns: [
    '\*\*/\*.{html,js}'
  ],
  swDest: './docs/sw.js',
  clientsClaim: true,
  skipWaiting: true
};
