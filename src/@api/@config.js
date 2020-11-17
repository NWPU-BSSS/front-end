import store from '../@redux/store'

let state = store.getState()
let AccessToken = ''
store.subscribe(() => {
  AccessToken = store.getState()['AccessToken']
})

/**
 * 默认post header
 * @type {Headers}
 */
let headers = new Headers()
headers.append('Content-Type', 'application/json')
if (AccessToken !== '') headers.append('AccessToken', AccessToken)

/**
 * POST 提交的init 对象
 * @param body
 * @returns {{mode: string, headers: Headers, method: string, body: string}}
 */
export const postInit = body => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers,
  mode: 'cors'
})

/**
 * get 提交的init 对象
 * @returns {{mode: string, headers: Headers}}
 */
export const getInit = () => ({
  headers,
  mode: 'cors'
})

/**
 * 生成url query字符串, 不带问号，需自行添加问号
 * @param args query参数列表，args为一个object
 * @returns {string}
 */
export const query = args => {
  let result = ''
  for (const key in args) if (args.hasOwnProperty(key)) {
    const value = args[key]
    if (result.length !== 0) result += '&'
    result += key + '=' + value
  }
  return result
}