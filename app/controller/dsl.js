const { z } = require('zod')
module.exports = (app) => {
   const BaseController = require('./base.js')(app)

   return class DslController extends BaseController {
      async getDsl(ctx) {
         const { dslService } = app.service
         const dslSchema = z.object({
            dslType: z.string()
         })

         ctx.validateQuery(dslSchema)

         const res = dslService.getDsl(ctx)
         console.log('res', res)
         this.success(ctx, res, {})
      }
   }
}