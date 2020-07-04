import { AxiosRequestConfig, AxiosResponse } from '../types'

// 生成错误信息的类
export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
  constructor(message: string, config: AxiosRequestConfig, code?: string|null, request?: any, response?: AxiosResponse,) {
    super(message);
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

// 创建错误信息
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error;
}