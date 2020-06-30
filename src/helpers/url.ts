import { isDate, isObject } from './util';
function encode(val: string): string {
  // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
  // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2c/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}
export function buildURL(url: string, params?: any): string {
  // 如果没有参数 直接返回url
  if (!params) {
    return url
  }
  const parts: string[] = []
  Object.keys(params).forEach((key) => {
    const val = params[key]
    // 如果值是不存在的 则return 进入下一次遍历
    // forEach 无法被打断 
    if (val === null || val === undefined) {
      return
    }
    // 如果val存在将val转换成数组
    let values = []
    if (Array.isArray(val)) {
      key += '[]'
      values = val
    } else {
      values = [val]
    }
    // 遍历数组
    values.forEach(val => {
      if (isDate(val)) {
        // toISOString 使用 ISO 标准返回 Date 对象的字符串格式:
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')
  if (serializedParams) {
    // 判定
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
      console.log('url',url)
    }
    // 如果url里有问好就使用&没有使用？
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams

  }
  return url;
}