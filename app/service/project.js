module.exports = (app) => {
   const BaseService = require('./base-service')(app)
   return class ProjectService extends BaseService {
      getList() {
         return [{
            name: 'projectA',
            id: 'A'
         }, {
            name: 'projectB',
            id: 'B'
         }, {
            name: 'projectC',
            id: 'C'
         }]
      }
   }
}