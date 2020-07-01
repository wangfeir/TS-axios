// 创建XMLHttpRequest方法
import { AxiosRequestConfig } from './types'
function xhr(config: AxiosRequestConfig) {
  const { method = 'get', data = null, url,headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true);
  Object.keys(headers).forEach(name=>{
    if(data===null&&name.toLowerCase()==='content-type'){
      delete headers[name]
    }else{
      request.setRequestHeader(name,headers[name])
    }
  })
  request.send(data)

}
export default xhr