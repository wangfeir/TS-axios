// axios的入口文件
import { AxiosRequestConfig } from "./types";
// XMLHttpRequest方法
import xhr from './xhr'
// 将参数带入url
import { buildURL } from './helpers/url'

import { transformData } from './helpers/data'

import { processHeaders } from './helpers/header'

function axios(config: AxiosRequestConfig) {
  // 对Config进行处理
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  // 对url进行处理
  config.url = transformURL(config);
  config.headers = transFormHeaders(config)
  config.data = transFormResquestData(config);
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  // 拼接参数到url
  return buildURL(url, params)
}
// 处理发送的数据，如果是object则转换为json字符串
function transFormResquestData(config: AxiosRequestConfig): string {
  const { data } = config
  return transformData(data)
}
function transFormHeaders(config: AxiosRequestConfig): void {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios