import store from '../@redux/store'

/**
 * post请求构造
 * @param body
 * @returns {Object}
 */
export const postInit = body => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: headers(),
  mode: 'cors'
})

/**
 * 构造带有AccessToken 的headers
 * @returns {Headers}
 */
export const headers = () => {
  let headers = new Headers()
  let {  accessToken } = store.getState().$UserState

  if (accessToken !== '') headers.append('AccessToken', accessToken)
  headers.append('content-type', 'application/json')
  return headers
}

/**
 * get请求构造
 * @returns {{mode: string, headers: Headers}}
 */
export const getInit = () => ({
  headers: headers(),
  mode: 'cors'
})

/**
 * 生成url query字符串, 不带问号，需自行添加问号
 * @param {Object} args query参数列表，args为一个object
 * @returns {string}
 */
export const query = (args = {}) => {
  let result = ''
  args.userId = args.userId || store.getState().$UserState.userId
  for (const key in args) if (args.hasOwnProperty(key)) {
    const value = args[key]
    if (result.length !== 0) result += '&'
    result += key + '=' + value
  }
  return result
}

/**
 *
 * @param {string} url
 * @param {Object} init 初始化对象
 * @returns {Promise<JSON>}
 */
export const request = async (url, init = {}) => (await fetch(url, init)).json()

