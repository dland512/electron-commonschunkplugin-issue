var path = require('path');
var webpack = require('webpack');


module.exports = (function () {
    var config = {};

    config.target = 'electron-renderer';

    config.entry = {
        app: path.join(__dirname, './renderer.js'),
        mymod: ['./mymodule']
    };

    config.output = {
        path: __dirname + '/build/',
        publicPath: __dirname + '/build/',
        filename: '[name].bundle.js'
    };

    // config.devtool = 'source-map';

    // config.resolve = {
    //     // file types webpack will process without extension listed on import statement
    //     extensions: ['.js', '.jsx', '.css', '.json']
    // };

    // config.module = {
    //     rules: [
    //         // support for .html as raw text
    //         {
    //             test: /\.html$/,
    //             loader: 'raw-loader'
    //         }
    //     ]
    // };

    config.node = {
        __dirname: false,
        __filename: false
    };

    config.plugins = [
        new webpack.optimize.CommonsChunkPlugin('mymod')

        // inject script tag for this bundle into index.html
        // new HtmlWebpackPlugin({
        //     template: path.join('./app', 'index.html'),
        //     chunksSortMode: 'dependency'
        // })
    ];

    return config;
})();
