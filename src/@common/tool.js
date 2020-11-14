export function urlParamParser (search) {
  let map = new Map()
  let params = search.replace(/^\?/, '')
  let paramList = params.split('&')
  for (let param of paramList) {
    let keyValue = param.split('=')
    map.set(keyValue[0], keyValue[1] || '')
  }
  return map
}