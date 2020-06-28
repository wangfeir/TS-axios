// 创建XMLHttpRequest方法
import { AxiosRequestConfig } from './types'
function xhr(config: AxiosRequestConfig) {
  const { method = 'get', data = null, url } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true);
  request.send(data)
}
export default xhr