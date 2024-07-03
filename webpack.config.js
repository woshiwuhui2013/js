const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { plugins } = require('chart.js')
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = true
module.exports = {

    "mode": "development",
    context: __dirname,
    entry: {
        index: "./browser.js",
        app: "./addapp.jsx"
    },
    
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false,
              }
            }
          },
          {
            test: /\.less$/i,
            use: [
              // 编译Less到CSS
              isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'less-loader',
            ],
          }
        ]
      },

    plugins:[
        new HtmlWebpackPlugin({
            template: './chart.html',
            filename: 'index.html'
        }
        ),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: './public' }, // 将 public 目录中的文件拷贝到输出目录
              ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
          }) 
    ].filter(Boolean),
    resolve: {
        // ... 其他 resolve 配置 ...
        fallback: {
          "assert": require.resolve("assert/")
        },
        extensions: ['.js', '.jsx', '.less'],
      }

}
