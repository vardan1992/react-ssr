const path = require('path');

module.exports = {
    // Inform webpack that we are building bundle for Nodejs, rather than the browser

    target:'node',

    // Tell webpack the root file for our application

    entry:'./src/index.js',

    // Tell webpack where to put the output file which is generated i.e bundle

    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },

    // Tell webpack to run babel on every file it runs through

    module: {
        rules:[
            {
                test: /\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        'react','stage-0',['env',{targets:{browsers:['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};