module.exports = (app) => {
   const BaseService = require('./base-service')(app)
   const test = require('../../model/index')(app)
   console.log('test....', test)
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