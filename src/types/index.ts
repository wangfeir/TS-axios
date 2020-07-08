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
export interface AxiosResponse<T=any>{
  data:T
  status:number
  statusText:string
  headers:any
  config:AxiosRequestConfig
  request:any
}
// 回调函数 Promise的接口类型
export interface AxiosPromise<T=any> extends Promise <AxiosResponse<T>>{

}

export interface AxiosError extends Error{
  isAxiosError:boolean
  config:AxiosRequestConfig
  code?:string|null
  request?:any
  response?:AxiosResponse
}

// axios 类的接口 
export interface Axios {
  request<T=any>(config:AxiosRequestConfig):AxiosPromise<T>

  get<T=any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
  delete<T=any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
  head<T=any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
  options<T=any>(url:string,config?:AxiosRequestConfig):AxiosPromise<T>
  post<T=any>(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise<T>
  put<T=any>(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise<T>
  patch<T=any>(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise<T>

}

// 混合接口
export interface AxiosInstance extends Axios{
 // 定义一个函数类型的接口 接收1个参数 返回值是AxiosPromise类型
 <T=any>(config:AxiosRequestConfig):AxiosPromise<T>
 <T=any>(url:any,config?:any):AxiosPromise<T>
}

// 拦截器管理接口
export interface AxiosInterceptorManager<T>{
  use(resolved:ResolvedFn<T>,rejected:RejectedFn<T>):number

  eject(id:number):void
}

export interface ResolvedFn<T>{
  (val:T):T|Promise<T>
}
export interface RejectedFn<T>{
  (error:any):any
}