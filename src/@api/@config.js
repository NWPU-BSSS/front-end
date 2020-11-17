/**
 * 默认post header
 * @type {{'content-type': string}}
 */
const headers = {
  'Content-Type': 'application/json'
}

/**
 * post 提交的init对象
 * @param body 提交的body，接受一个object
 * @returns {{method: string, header: {'content-type': string}, body: string}}
 */
export const postInit = body => ({
  method: 'POST',
  body: JSON.stringify(body),
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