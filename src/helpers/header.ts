import { isPlainObject } from './util'

// 对headers 的key (Content-type) 进行判定并处理 (大小写转换)
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && normalizedName.toUpperCase() === name.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
// 根据发送的data的格式判定 headers
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-type');
  // 只有data是object时才触发该方法
  if (isPlainObject(data)) {
    if (headers && !headers['Content-type']) {
      headers['Content-type'] = 'application/json;charset=utf-8'
    }
  }
  return headers;
}
// 将headers由string类型转为给object类型
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null);
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach((line) => {
    let [key, data] = line.split(':');
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    data = data.trim().toLowerCase();
    if (!data) {
      return
    }
    parsed[key] = data;
  })
  return parsed;

}