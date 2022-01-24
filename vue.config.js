module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器1
    // devServer: {
    //     proxy: 'http://localhost:5000' //这里是代理服务器向哪个服务器要数据
    // }


    // 开启代理服务器2
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' }
                // ws: true,  //用于支持websocket
                // changeOrigin: true  //  控制代理服务器请求头的host的值，默认为true
            },
            '/atguigu2': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/atguigu2': '' }
            }
        }
    }
}