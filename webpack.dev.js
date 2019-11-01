const path = require('path');
const common = require("./webpack.common");
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    devServer: {
    contentBase: path.join(__dirname, "dist/"),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true
}
});