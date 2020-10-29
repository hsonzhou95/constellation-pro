module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://web.juhe.cn:8080",
                changeOrigin: true,
                logLevel: 'debug',
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ""
                }
            },
        },
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false
};