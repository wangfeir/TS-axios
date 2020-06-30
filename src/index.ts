// axios的入口文件
import { AxiosRequestConfig } from "./types";
// XMLHttpRequest方法
import xhr from './xhr'
// 将参数带入url
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig) {
  // 对Config进行处理
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  // 对url进行处理
  config.url = transformURL(config);
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  // 拼接参数到url
  return buildURL(url, params)
}

export default axios