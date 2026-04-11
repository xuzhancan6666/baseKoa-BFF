const { z } = require('zod');

module.exports = {
   '/api/post/project/list': {
      // 这里配置的是 基于 zod 的 schema 定义
      // 值为zod 的类型定义字符串
      /*
         const schema = z.object({
            page: z.number(),
            pagenum: z.string()
            .....
         })
      */
      post: [
         {
            type: 'data',
            schema: {
               page: z.number(),
               pagenum: z.number()
            }
         },
      ]
   }
}