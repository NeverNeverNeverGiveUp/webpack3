const path=require("path");

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

    },
    // 插件，用户声场模板和各项功能
    plugins:[

    ],
    // 配置webpack开发服务功能
    devServer:{

    }
}