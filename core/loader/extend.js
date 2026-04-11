const path = require('path')
const glob = require('glob')
const { sep } = path
/**
 *
 * @param {koa} app Koa的实例
 * 加载extend下的所有文件。 实现 app.extend.${目录}.${文件}.js
 * 规定为单层结构。
 * app/extend/customer-extend
 *  => app.extend.customerExtend
 * @returns
 */
module.exports = (app) => {
   // 读取 app/extend/xxx/xxx.js
   const filePath = path.resolve(app.businessPath, 'extend')
   // 检查目录是否存在
   if (!require('fs').existsSync(filePath)) {
     app.extend = {}
     return
   }

   // 解析出来的为 ['/app/extend/A.js', '/app/extend/B.js']
   const fileList = glob.sync(path.join(filePath, '**', '*.js'))

   // 遍历文件夹所有js。内容加载到 app.middelware 上
   const extend = {}
   fileList.forEach(file => {
      // 获取文件全路径
      let name = path.resolve(file)
      // 截取 extend 以下的 xxx/xxx.js
      // /app/extend/xxx/A.js' => xxx/A.js'
      name = name.split(`extend${sep}`)[1].replace('.js', '')
      // 把 xxx-xxx 改驼峰。a-a/aaa.js => aA.aaa.js
      name = name.replace(/[_-][a-z]/ig, (s) => s.substring(1).toUpperCase())

      for(let key in app) {
         if(key === name) {
            console.log(`[extend load error] name: ${name} is already in app`)
         }
      }

      app[name] = require(path.resolve(file))(app)
   });

   app.extend = extend
   console.log('✅ extend加载完成:', Object.keys(app.extend))
}