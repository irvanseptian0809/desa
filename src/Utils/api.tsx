import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

interface interfaceQuery {
  offset?: number,
  limit?: number,
}

interface interfaceApi {
  endpoint: string[],
  query?: interfaceQuery,
  params?: string[],
}

function generateUrl(urlString: string, params: string[] = [], query?: interfaceQuery | any, host?: string) {
  let endpoint = urlString
  if (params.length > 0) {
    params.map((param: string) => endpoint = `${endpoint}/${param}`)
  }
  if (query) {
    const queryParam = new URLSearchParams()
    Object.keys(query).forEach((key: any) => {
      queryParam.append(key, query[key])
    })
    endpoint = `${endpoint}?${queryParam.toString()}`
  }

  return `${host}/${endpoint}`
}

export default function api(options: interfaceApi) {
  const {
    endpoint = ['get', ''],
    query,
    params,
  }: interfaceApi = options
  const [method, path] = endpoint
  const apiHost = 'https://pokeapi.co/api/v2'
  const url = generateUrl(path, params, query, apiHost)

  return ajax({
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  }).pipe(
    map(res => res.response || {}),
    catchError((error) =>  throwError(error.response)),
  )
}
