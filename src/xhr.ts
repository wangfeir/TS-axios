// 创建XMLHttpRequest方法
import { AxiosRequestConfig,AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/header'
function xhr(config: AxiosRequestConfig):AxiosPromise {
  return new Promise((resolve,reject)=>{
    const { method = 'get', data = null, url,headers,responseType,timeout } = config
    const request = new XMLHttpRequest()
    // 设置返回内容的格式
    if(responseType){
      request.responseType = responseType
    }
    if(timeout){
      request.timeout = timeout;
    }

    request.open(method.toUpperCase(), url, true);
    // 如果请求发生错误，的错误提示
    request.onerror = function handleError(){
      reject(new Error('Network Error'))
    }
    // 超时错误抛出异常
    request.ontimeout = function handleTimeout(){
      reject(new Error(`Timeout of ${timeout} ms exceeded!`))
    }   
    request.onreadystatechange = function handleLoad(){
      if(request.readyState!==4){
        return
      }
      // 如果发生网络错误，或者超时 status都为0
      if(request.status===0){
        return;
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
      handleResponse(response)
    }
    
    Object.keys(headers).forEach(name=>{
      if(data===null&&name.toLowerCase()==='content-type'){
        delete headers[name]
      }else{
        request.setRequestHeader(name,headers[name])
      }
    })
    request.send(data)
    // 对返回值的编码进行判断如果错误就抛出错误编码
    function handleResponse(response:AxiosResponse):void{
      if(response.status>=200&&response.status<300){
        resolve(response)
      }else{
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    }
  })
  

}
export default xhr