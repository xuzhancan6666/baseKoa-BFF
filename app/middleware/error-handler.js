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

         // 模版找不到，重定向到首页
         if(message && message.indexOf('template not found') > -1) {
            // 也没重定向
            ctx.status = 302; // 临时重定向
            ctx.redirect(`${app.options?.homePage}`)
            return;
         }

         // 其他异常，返回固定格式的错误信息
         const resBody = {
            succes: false,
            code: 500000,
            message: '网络异常，请稍后重试'
         }

         // 参数校验失败
         if(status && status === 442) {
            resBody.code = 442000
            resBody.message = '参数验证失败'
         }

         ctx.status = 200
         ctx.body = resBody
      }
   }
}