const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { plugins } = require('chart.js')
module.exports = {

    "mode": "development",
    context: __dirname,
    entry: "./browser.js",
    
    output: {
        filename: "main.js",
        path: __dirname + '/dist'
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
        })
    ],
    resolve: {
        // ... 其他 resolve 配置 ...
        fallback: {
          "assert": require.resolve("assert/")
        }
      }

}