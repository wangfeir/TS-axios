import { isPlainObject } from './util'
export function transformData(data:any):any{
  console.log('data',data)

  if(isPlainObject(data)){
    return JSON.stringify(data)
  }
  return data
}

// 如果返回的data是string就转换成json
export function transformResponse(data:any):any{
  if(typeof(data)==='string'){
    try{
      data = JSON.parse(data)
    } catch(err){
      // do nothing   // 如果这里不写备注的话会有警告
    }
  }
  return data;
}