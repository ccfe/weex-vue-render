var path = require('path')
var resolve = require('../build/utils').resolve
module.exports = {
  // debug: true,
  debug: false,
  build: {
    env: require('./prod.env'),
    index: resolve('public/index.html'),
    publicDistRoot: resolve('public/dist'),
    publicRoot: resolve('public'),
    publicPath: '/dist/',
    productionSourceMap: true,
  },
  dev: {
    env: require('./dev.env'),
    clientPath: resolve('build/dev-client.js'),
    port: 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    publicPath: '/dist/',
    proxyTable: {}
  }
}
