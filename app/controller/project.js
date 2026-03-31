
module.exports = (app) => {
   const BaseController = require('./base')(app)

   return class PorjectController extends BaseController {
      async getList(ctx) {
         const {project: projectService} = this.service
         const res = projectService.getList()
         this.success(ctx, res, {})
      }

      async getListByPost(ctx) {
         const {project: projectService} = this.service
         const res = projectService.getList()
         this.success(ctx, res, {})
      }
   }
}