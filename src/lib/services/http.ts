import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

export type HttpConfig<T = any> = AxiosRequestConfig<T>

export type HttpResponse<T = any> = AxiosResponse<T>

export type HttpError = AxiosError

export interface HttpInterceptors {
  onRequest?: <T>(config: T) => T
  onResponse?: <T>(response: T) => T
  onRequestError?: <T>(error: T) => any
  onResponseError?: <T>(error: T) => any
}

export interface HttpInstance {
  request<T = any, R = HttpResponse<T>, D = any>(
    config: HttpConfig<D>
  ): Promise<R>
  get<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    config?: HttpConfig<D>
  ): Promise<R>
  post<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpConfig<D>
  ): Promise<R>
  put<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpConfig<D>
  ): Promise<R>
  patch<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpConfig<D>
  ): Promise<R>
  delete<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    config?: HttpConfig<D>
  ): Promise<R>
  setInterceptors: (interceptors: HttpInterceptors) => void
}

export class Http implements HttpInstance {
  private instance: AxiosInstance

  constructor(config: HttpConfig, interceptors: HttpInterceptors = {}) {
    this.instance = axios.create(config)
    this.setInterceptors(interceptors)
  }

  setInterceptors(interceptors: HttpInterceptors = {}) {
    this.instance.interceptors.request.use(
      (config) => interceptors.onRequest?.<HttpConfig>(config) || config
    )
    this.instance.interceptors.response.use(
      (response) =>
        interceptors.onResponse?.<HttpResponse>(response) || response
    )
    this.instance.interceptors.request.use(
      undefined,
      (error) =>
        interceptors.onRequestError?.<HttpError>(error) || Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      undefined,
      (error) =>
        interceptors.onResponseError?.<HttpError>(error) ||
        Promise.reject(error)
    )
  }

  request<T = any, R = HttpResponse<T>, D = any>(
    config: HttpConfig<D>
  ): Promise<R> {
    return this.instance.request<T, R, D>(config)
  }

  get<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    config?: HttpConfig<D>
  ): Promise<R> {
    return this.instance.get<T, R, D>(url, config)
  }

  post<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpConfig<D>
  ): Promise<R> {
    return this.instance.post<T, R, D>(url, data, config)
  }

  put<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpConfig<D>
  ): Promise<R> {
    return this.instance.put<T, R, D>(url, data, config)
  }

  patch<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpConfig<D>
  ): Promise<R> {
    return this.instance.patch<T, R, D>(url, data, config)
  }

  delete<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    config?: HttpConfig<D>
  ): Promise<R> {
    return this.instance.delete<T, R, D>(url, config)
  }
}