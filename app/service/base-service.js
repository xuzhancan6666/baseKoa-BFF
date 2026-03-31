const superagent = require('superagent')
module.exports = (app) => class BaseService {
   constructor() {
      this.app = app;
      this.config = app.config
      this.curl = superagent
   }
}