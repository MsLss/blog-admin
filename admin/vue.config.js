module.exports = {
    // 项目打包时的路径，解决打包时白屏问题
    publicPath:"./",
    // 配置vue-cli的服务器
    devServer:{
        // 当项目打开时，自动打开浏览器进行预览
        open:true,
        // 设置项目启动的端口号
        port:9999,
        // 设置项目的主机名
        host:"localhost",
        // 设置是否开启https协议
        https:false,
        // 配置跨域
        proxy:{
            // /dev-api 代理名称
            [process.env.VUE_APP_BASE_API]:{
                // 设置要配置跨域的地址
                target:process.env.VUE_APP_SERVICE_URL,
                // 开启代理
                changOrigin:true,
                // 重写路径
                pathRewrite:{
                    ["^" + process.env.VUE_APP_BASE_API]:""
                }
            }
        }
    },
    // 关闭eslint
      lintOnSave:false,
    //   设置项目打包时不生成.map后缀名的文件,提高项目打包和构建的速度
      productionSourceMap:false,
}