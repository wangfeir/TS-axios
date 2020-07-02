// 公共接口文档
export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method // 请求方法 类型字面量 可选默认get
  data?: any // data 可选参数 可选 任意格式
  params?: any  // 回调函数 可选 任意格式
  headers?:any
  responseType?:XMLHttpRequestResponseType

}
// 返回数据的类型接口 
export interface AxiosResponse{
  data:any
  status:number
  statusText:string
  headers:any
  config:AxiosRequestConfig
  request:any
}
// 回调函数 Promise的接口类型
export interface AxiosPromise extends Promise <AxiosResponse>{

}