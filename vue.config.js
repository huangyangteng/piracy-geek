const path = require('path')
const DEV_HOST = 'http://localhost:22222'
const PRODUCT_HOST='http://www.leexiao.site/'
module.exports = {
    devServer: {
        //只在开发时有效，打包后失效
        open: true, //自动打开浏览器
        proxy: {
            //配置接口转发
            '/gk-api': {
                target: PRODUCT_HOST, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                // pathRewrite: {
                //     '^/gk-api': ''
                // }
            },
            '/gk-files': {
                target: PRODUCT_HOST
            },
            '/api': {
                target: 'http://www.leexiao.site/'
            }
        }
    },
    chainWebpack: config => {
        // ----性能分析插件
        // if (process.env.NODE_ENV === 'production') {
        //     config
        //         .plugin('webpack-bundle-analyzer')
        //         .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        //     config.devtool = 'source-map'
        // }
        //把全局的样式注入
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type =>
            addStyleResource(config.module.rule('scss').oneOf(type))
        )
    }
}

/**
 * 将通用样式注入.vue文件
 * @param {*} rule
 */
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/css/variable.scss') // 需要全局导入的less
            ]
        })
}
