const log4js = require('log4js')

module.exports = (app) => {
   let logger;

   // 日志工具
   /*
      外部使用 app.logger.log app.logger.error
      更具环境判断。
   */
   if(app.env.isLocal()) {
      // 打印输出控制台
      logger = console
   } else {
      // 日志书痴并落地磁盘
      log4js.configure({
         appenders: {
            console: {
               type: 'console'
            },
            // 日志文件切分
            dateFile: {
               type: 'dateFile',
               filename: './log/application.log',
               pattern: '.yyyy-MM-dd'
            },
         },
         categories: {
            default: {
               appenders: ['console', 'dateFile'],
               level: 'trace'
            }
         }
      })

      logger = log4js.getLogger()
   }

   return logger
}