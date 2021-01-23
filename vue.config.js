module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist'
    : '/',
  assetsDir: 'assets',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  filenameHashing: process.env.NODE_ENV === 'production' ? false : true,
}