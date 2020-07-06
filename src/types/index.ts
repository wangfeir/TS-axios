// 公共接口文档
export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method // 请求方法 类型字面量 可选默认get
  data?: any // data 可选参数 可选 任意格式
  params?: any  // 回调函数 可选 任意格式
  headers?:any
  responseType?:XMLHttpRequestResponseType,
  timeout?:number

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

export interface AxiosError extends Error{
  isAxiosError:boolean
  config:AxiosRequestConfig
  code?:string|null
  request?:any
  response?:AxiosResponse
}

// axios 类的接口 
export interface Axios{
  request(config:AxiosRequestConfig):AxiosPromise

  get(url:string,config?:AxiosRequestConfig):AxiosPromise
  delete(url:string,config?:AxiosRequestConfig):AxiosPromise
  head(url:string,config?:AxiosRequestConfig):AxiosPromise
  options(url:string,config?:AxiosRequestConfig):AxiosPromise
  post(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise
  put(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise
  patch(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise

}

// 混合接口
export interface AxiosInstance extends Axios{
 // 定义一个函数类型的接口 接收1个参数 返回值是AxiosPromise类型
  (config:AxiosRequestConfig):AxiosPromise
}