document.getElementById('title').innerHTML='Hello Webpack';
alert("entry成功了！")
// 使用webpack-dev-server服务器启动时，打包生成的文件在内存中，而使用webpack命令打包生成的bundle.js默认是在dist目录下，页面引用的时候路径不同。