const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js'); // 你的 webpack 配置文件

const app = express();
const compiler = webpack(webpackConfig);

// 使用 webpack-dev-middleware 中间件
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

// 监听端口
const port = process.env.PORT || 80;
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  // 在默认浏览器中打开页面
  const open = await import('open');
  open.default(`http://localhost:${port}`);
});
