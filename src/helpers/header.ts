import {isPlainObject} from './util'

// 对headers 的key (Content-type) 进行判定并处理 
function normalizeHeaderName(headers:any,normalizedName:string):void{
  if(!headers){
    return
  }
  Object.keys(headers).forEach(name=>{
    if(name!==normalizedName && normalizedName.toUpperCase() === name.toUpperCase()){
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
export function processHeaders(headers:any,data:any):any{
  normalizeHeaderName(headers,'Content-type');
  // 只有data是object时才触发该方法
  if(isPlainObject(data)){
    if(headers && !headers['Content-type']){
      headers['Content-type'] = 'application/json;charset=utf-8'
    }
  }
  return headers;
}