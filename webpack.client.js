const path = require('path');

const merge =  require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    

    // Tell webpack the root file for our application

    entry:'./src/client/client.js',

    // Tell webpack where to put the output file which is generated i.e bundle

    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'public')
    }

};

module.exports = merge(baseConfig,config);