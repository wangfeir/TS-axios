const toString = Object.prototype.toString;
// 判定是否是Date类型
export function isDate(val: any): val is Date {
  return toString.call(val) === '[Object Date]'
}
// 判定是否是object 
export function isObject(val: any): val is Object {
  // null 也是object类型
  return val !== null && typeof(val) === 'object'
}
// 判定是否是普通的object类型
export function isPlainObject(val:any):val is Object{
  return toString.call(val)==="[object Object]"
}