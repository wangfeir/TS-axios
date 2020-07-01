import { isPlainObject } from './util'
export function transformData(data:any):any{
  console.log('data',data)

  if(isPlainObject(data)){
    return JSON.stringify(data)
  }
  return data
}