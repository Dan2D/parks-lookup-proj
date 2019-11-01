const path = require('path');
const common = require("./webpack.common");
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinWebpackPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  const IMAGE_MIN_PLUGIN = new ImageMinWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: ({quality: 65}),
      plugins: [imageminMozjpeg({quality: 65})]
  });
  const COPY_PLUGIN = new CopyWebpackPlugin([
      {from: "./public"}
  ])
  const MINI_CSS_PLUGIN = new MiniCSSWebpackPlugin({
      filename: '[name].[contenthash].css'
  })
const BROTLI_PLUGIN = new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
});
const BUNDLE_ANALYZER = new BundleAnalyzerPlugin({
    analyzerMode: 'disable',
    generateStatsFile: true,
    statsOptions: { source: false }
});
const WORKBOX_PLUGIN = new WorkboxPlugin.GenerateSW({
    exclude: [/\.(?:png|jpg|jpeg|svg)$/],   
    runtimeCaching: [{
        urlPattern: /\.(png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
            cacheName: 'images',
            expiration: {
                maxEntries: 15,
                maxAgeSeconds: (60 * 60 * 24 * 7)
            }
        }
    },
    {
        urlPattern: new RegExp('https://fonts.googleapis.com/css?family=Oxygen:300,400&display=swap'),
        handler: 'StaleWhileRevalidate',
        options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
    }]
})

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: 'main.[contenthash].bundle.js',
        chunkFilename: '[name].[contenthash].bundle.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    reuseExistingChunk: true,
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [new CleanWebpackPlugin(), COPY_PLUGIN, MINI_CSS_PLUGIN ,BROTLI_PLUGIN, IMAGE_MIN_PLUGIN, WORKBOX_PLUGIN, BUNDLE_ANALYZER],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCSSWebpackPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
});
