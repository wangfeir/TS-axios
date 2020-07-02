// 创建XMLHttpRequest方法
import { AxiosRequestConfig,AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/header'
function xhr(config: AxiosRequestConfig):AxiosPromise {
  return new Promise((resolve)=>{
    const { method = 'get', data = null, url,headers,responseType } = config
    const request = new XMLHttpRequest()
    // 设置返回内容的格式
    if(responseType){
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true);
    request.onreadystatechange = function handleLoad(){
      if(request.readyState!==4){
        return
      }
      // 获取返回头，并将返回头转换为对象
      const responseHeader =parseHeaders(request.getAllResponseHeaders());
      // 根据设置的respinseType判定返回的标准
      const responseData = responseType!=='text'?request.response:request.responseText
      
      // 将获取的数据拼接成符合AxiosResponse接口的值
      const response:AxiosResponse={
        data:responseData,
        headers:responseHeader,
        status:request.status,
        statusText:request.statusText,
        config,
        request
      }
      // 返回拼接的值
      resolve(response)
    }
    Object.keys(headers).forEach(name=>{
      if(data===null&&name.toLowerCase()==='content-type'){
        delete headers[name]
      }else{
        request.setRequestHeader(name,headers[name])
      }
    })
    request.send(data)
  })
  

}
export default xhr