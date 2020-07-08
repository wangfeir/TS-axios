
import {RejectedFn,ResolvedFn} from '../types'
interface Interceptor <T>{
  resolved:ResolvedFn<T>
  rejected?:RejectedFn<T>
}

export default class InterceptorManager <T>{
  // 用来存储拦截器
  private interceptors:Array<Interceptor <T>|null>

  constructor(){
    this.interceptors = []
  }

  // 对外方法
  // 添加
  use(resolved:ResolvedFn<T>,rejected?:RejectedFn<T>):number{
    this.interceptors.push({
      resolved,rejected
    })
    return this.interceptors.length-1
  }
  // 遍历拦截器
  forEach(fn:(interceptor:Interceptor<T>)=>void):void{
    this.interceptors.forEach(interceptor=>{
      if(interceptor !== null){
        fn(interceptor)
      }
    })
  }
  // 删除
  eject(id:number):void{
    if(this.interceptors[id]){
      this.interceptors[id] = null
    }
  }
}