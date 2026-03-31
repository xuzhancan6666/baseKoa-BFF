module.exports = (app) => {
   const BaseService = require('./base-service')(app)
   return class ProjectService extends BaseService {
      getList() {
         return [{
            name: 'projectA',
         }, {
            name: 'projectB'
         }]
      }
   }
}