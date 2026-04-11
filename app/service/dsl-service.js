module.exports = (app) => {
   const BaseService = require('./base-service')(app)
   const modelList = require('../../model/index.js')(app)
   return class DslService extends BaseService {
      getDsl(ctx) {
         const { dslType } = ctx.query
         console.log('dslService getDsl.... 获取Dsl配置', dslType, modelList)

         return modelList
      }
   }
}