let host = require('./src/config/host')
const path = require('path')

module.exports = {
    devServer: {
        //只在开发时有效，打包后失效
        open: true, //自动打开浏览器
        proxy: {
            //配置接口转发
            '/api': {
                target: host.dev, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/api': ''
                }
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
                path.resolve(__dirname, './src/assets/css/variable.less') // 需要全局导入的less
            ]
        })
}
