/*
运行时异常 兜底所有异常。
*/
module.exports = (app) => {
   return async(ctx, next) => {
      try {
         await next()
      } catch (error) {
         // 异常处理
         const { status, message, detail } = error
         app.logger.info(JSON.stringify(error))
         app.logger.error('[-- exception --]:', error)
         app.logger.info('[-- exception --]:', status, message, detail)

         if(message && message.indexOf('template not found') > -1) {
            // 也没重定向
            ctx.status = 302; // 临时重定向
            ctx.redirect(`${app.options?.homePage}`)
            return;
         }

         const resBody = {
            succes: false,
            code: 500000,
            message: '网络异常，请稍后重试'
         }

         ctx.status = 200
         ctx.body = resBody
      }
   }
}