var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'source-map',

    target: 'electron-main',

    entry: {
        main: path.join(__dirname, './main.js'),
        mymod: ['./mymodule']
    },

    output: {
        path: __dirname + '/build/',
        publicPath: __dirname + '/build/',
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /index.html/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'index.html'
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('mymod')
    ],

    node: {
        __dirname: false,
        __filename: false
    }
};
