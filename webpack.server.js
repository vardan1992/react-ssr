const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we are building bundle for Nodejs, rather than the browser

    target:'node',

    // Tell webpack the root file for our application

    entry:'./src/index.js',

    // Tell webpack where to put the output file which is generated i.e bundle

    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals:[webpackNodeExternals()]

   
};

module.exports = merge(baseConfig,config);