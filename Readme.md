使用Webpack制作的脚手架，能够实现一键打包js、html代码至dist下的一个html，简化部署流程。

使用方法：

进入后npm init -y产生package.json
然后安装依赖：
npm install terser-webpack-plugin webpack webpack-cli webpack-dev-server html-webpack-plugin html-inline-script-webpack-plugin prettier  --save-dev
测试:npm run dev
打包：npx webpack --mode production或者npm run build