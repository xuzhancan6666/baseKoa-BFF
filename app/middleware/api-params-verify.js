const zod = require('zod')
module.exports = (app) => {
   return (schema) => {
      return async(ctx, next) => {
         try {
            // 合并 body, query, params 进行校验
            // 根据需求，你可以只校验 body 或 query
            const dataToValidate = {
               body: ctx.request.body,
               query: ctx.query,
               params: ctx.params
            };

            // 执行校验，parseAsync 支持异步校验
            const validatedData = await schema.parseAsync(dataToValidate);

            // 将校验后的干净数据挂载到 ctx 上，供 Controller 使用
            // 这样 Controller 拿到的就是经过清洗和类型转换的数据了
            ctx.validatedData = validatedData;

            await next();
         } catch (err) {
            if (err instanceof z.ZodError) {
            // 统一错误处理：返回 422 或 400
            ctx.status = 422;
            ctx.body = {
               code: 'VALIDATION_ERROR',
               message: '参数校验失败',
               errors: err.errors // 详细的错误信息
            };
            return; // 终止后续中间件
            }
            throw err; // 抛出其他错误
         }
      }
   }
}