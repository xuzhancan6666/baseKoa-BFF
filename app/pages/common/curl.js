const md5 = require('md5')
import { ElMessage } from 'element-plus'
/*
   封装 axios。网络请求 curl 方法。
*/
const curl = ({
   url = '',
   method = 'post',
   headers = {},
   data = {},
   query = {},
   responseType = 'json',
   timeout = 6 * 1000,
   errorMessages = '网络异常'
}) => {
   // 接口签名处理。（动态）
   const signKey = 'locking'
   const st = Date.now()
   const sSign = md5(`${signKey}_${st}`)
   // 获取参数. 构造参数
   const axoisSetting = {
      url,
      method,
      params: query,
      data,
      responseType,
      timeout,
      headers: {
         ...headers,
         s_t: st,
         s_sign: sSign
      }
   }

   return axios.request(axoisSetting).then((response) => {
      // body: { success: true, data, metadata }
      const resData = response.data || {}
      const code = response.status
      // 后端API返回格式
      const { success, message, data, metadata} = resData;

      // 成功或者失败
      if(!success) {
         if(code === 442) {
            ElMessage.error('请求参数异常')
         } else if (code === 445 ) {
            ElMessage.error('请求参数异常')
         }else if (code === 50000 ) {
            // 服务错误。
            ElMessage.error(message)
         } else {
            ElMessage.error(errorMessages)
         }

         return Promise.resolve({
            success,
            code,
            message
         })
      }

      return Promise.resolve({
         success,
         data,
         code,
         metadata,
      })
   }).catch((error) => {
      console.log('error', error)
      const {message} = error;
      // 对于程序 错误。 处理一层
      if(message.match(/timeout/)) {
         return Promise.resolve({
            message: 'Request timout',
            code: 504
         })
      }
      // 对于 业务请求 错误。 处理一层
      return Promise.resolve({...error})
   })
}

export default curl