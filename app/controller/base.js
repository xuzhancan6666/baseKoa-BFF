module.exports = (app) => class BaseConfroller {
   // 基类 controller
   // 同一收拢 服务请求controller 公共方法。
   //
   constructor() {
      this.app = app;
      this.config = app.config;
      this.service = app.service;
   }

   // API 处理成功的统一返回结构
   // ctx 上下文
   // data 返回参数
   // meta 附加数据
   success(ctx, data = {}, metadata = {}) {
      ctx.status = 200
      ctx.body = {
         success: true,
         data,
         metadata
      }
   }

   // API 处理失败的统一返回结构
   // ctx 上下文
   // data 返回参数
   // meta 附加数据
   fail(ctx, message, code) {
      ctx.status = 200
      ctx.body = {
         success: false,
         message,
         code,
      }
   }
}