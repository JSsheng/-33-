const { defineConfig } = require('@vue/cli-service')
const { join } = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint检查
  lintOnSave: false,
  // 自动的打开浏览器, port, host
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    },
    // 路径别名
    resolve: {
      alias: {
        cpns: join(__dirname, 'src/components')
      }
    }
  }
})
