const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'xwb-3d.js',
        library: 'xwb',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin()
    ]
}