const path=require("path");
const htmlPlugin=require("html-webpack-plugin");

module.exports={
    //入口文件配置,可以是单一入口，也可以是多入口。
    entry:{
        entry:"./src/entry.js",
        entry2:"./src/entry2.js"
    },
    // 出口文件配置,支持多出口配置。
    output:{
        // 打包的路径地址
        path:path.resolve(__dirname,"dist"),
        // 打包的文件名称
        filename:"[name].js"
    },
    // 模块：主要是解析CSS和图片转换压缩等功能。
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]

    },
    // 插件，用户声场模板和各项功能
    plugins:[
        new htmlPlugin({
            // minify是对html文件进行压缩，removeAttrubuteQuotes是去掉属性的双引号。
            minify:{
                removeAttributeQuotes:true
            },
            // hash：为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            hash:true,
            // template：是要打包的html模版路径和文件名称。
            template:"./src/index.html"
        })

    ],
    // 配置webpack开发服务功能
    devServer:{
        // 设置基本目录结构
        contentBase:path.resolve(__dirname,"dist"),
        // 服务器的ip地址，可以使用ip也可以使用localhost
        host:"localhost",
        // 服务端压缩是否开启
        compress:true,
        // 配置服务端口号
        port:3000

    }
}