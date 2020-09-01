export type Method = 'get' | 'GET'
| 'put' | 'PUT'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'head' | 'HEAD'
| 'delete' | 'DELETE'
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data ? : any
  params ? :any
  headers ? :any
}
