// 所有的ostcss的插件都属一个函数
const pxToRem = require('postcss-pxtorem')
module.exports = {
  // 插件
  plugins: [
    pxToRem({
      // 根节点的字体大小
      rootValue: ({ file }) => (/vant/.test(file) ? 37.5 : 75),
      //  所有的属性都转成rem
      propList: ['*']
    })
  ]
}
