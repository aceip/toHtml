const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode:"development", //配置模式
  entry: '/index.js', // 入口文件路径
  output: {
    path: __dirname + '/dist', // 输出文件夹路径
    filename: 'bundle.js', // 输出文件名
  },
  optimization: {
    minimize: true, // 使用 JavaScript 的压缩
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 不提取注释到单独的文件中
        terserOptions: {
          output: {
            comments: false, // 移除所有注释
            beautify: true, // 保持格式，即美化代码
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      publicPath: false,
	    // minify: false, //取消输出一行，直接嵌入所有格式显示
      minify: {
        collapseWhitespace: false, // 禁止压缩空白字符
        minifyCSS: false, // 禁止压缩内联 CSS
        minifyJS: false, // 禁止压缩内联 JavaScript
        removeComments: false, // 禁止移除 HTML 注释
        caseSensitive: true, // 保留大小写
        removeScriptTypeAttributes: true, // 移除 script 标签的 type 属性
        removeStyleLinkTypeAttributes: true, // 移除 style 和 link 标签的 type 属性
      }
    }),
    new HtmlInlineScriptPlugin({
      assetPreservePattern: [/index.js$/],
    }),
  ],
  devServer: {
    host: '0.0.0.0', // 设置主机，'0.0.0.0' 表示监听所有可用的网络接口
    port: 80,      // 设置端口号，默认为 80
    open: true, //启动后是否自动打开浏览器
  },
  //正则匹配库里面只需要的部分
  // externals:[
  //   'echarts',
  //   /^library\/.+$/,
  // ],
  
};
