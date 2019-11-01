const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
              {
                test: /\.(png|jpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                    context: 'src'
                } 
              },
        ]
    },
}