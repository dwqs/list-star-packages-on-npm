const path = require('path');

module.exports = {
    development: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000,
        prefix: ''
    },
    production: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/view-star-packages-on-npm/dist/',
        assetsSubDirectory: 'static',
        prefix: '',
        productionSourceMap: true
    }
}
