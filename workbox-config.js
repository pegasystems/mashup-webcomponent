module.exports = {
  globDirectory: './docs/',
  globPatterns: [
    '\*\*/\*.{html,js,css,png,jpg}'
  ],
  swDest: './docs/sw.js',
  clientsClaim: true,
  skipWaiting: true
};
