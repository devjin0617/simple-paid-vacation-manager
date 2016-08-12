const webpack = require('webpack');

module.exports = {
    entry : [
        'materialize-loader!./webpack/materialize.config.js',
        './src/index.js'
    ],

    output : {
        path : __dirname + '/public/',
        filename : 'bundle.js'
    },

    devServer : {
        inline : true,
        port : 7777,
        contentBase : __dirname + '/public/'
    },

    module : {
        loaders : [
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
            {
                test : /\.js$/,
                loader : 'babel',
                exclude : /node_modules/,
                query : {
                    cacheDirectory : true,
                    presets : ['es2015', 'react']
                }
            }
        ]
    },

    externals: {
        jquery: 'jQuery'
    }
};