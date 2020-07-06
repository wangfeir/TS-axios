// axios的入口文件
import { AxiosRequestConfig,AxiosPromise, AxiosResponse } from "../types";
// XMLHttpRequest方法
import xhr from './xhr'
// 将参数带入url
import { buildURL } from '../helpers/url'

import { transformData,transformResponse } from '../helpers/data'

import { processHeaders } from '../helpers/header'

export default  function dispatchRequest(config: AxiosRequestConfig) :AxiosPromise{
  // 对Config进行处理
  processConfig(config)
  // 将返回的res中的data进行格式转换
  return xhr(config).then((res)=>{
    return transformResponseData(res)
  })
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
  return buildURL(url!, params)
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
// 处理res中的data 如果是字符串格式 那么就转换成一个对象
function transformResponseData(res:AxiosResponse):AxiosResponse{
  res.data =transformResponse(res.data);
  return res
}