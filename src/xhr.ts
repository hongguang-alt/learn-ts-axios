import { AxiosRequestConfig } from './types'

function xhr(config: AxiosRequestConfig) {
  const { method = 'get', url, data = null, headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (!data && name.toUpperCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}

export default xhr
