import { message } from 'antd'
import store from './store'
import { clearAccessToken, logout } from './actions'

export const success = msg => {
  message.success(msg)
}

export const error = msg => {
  message.error(msg)
}

export const warning = msg => {
  message.warning(msg)
}

/**
 * 异步action 统一处理
 * @param response
 * @returns {Promise<unknown>}
 */
export function asyncResponseHandler (response) {
  let { code, msg, data } = response
  return new Promise(resolve => {
    if (code === 1) {
      resolve(data)
    } else if (code === 0) {
      // TODO: 在后端完成 code= -2 后删掉到 ** 之间的代码
      if (msg === 'token无效') {
        store.dispatch(clearAccessToken())
        store.dispatch(logout())
      }
      //TODO: **
      else error(msg)
    } else if (code === -1) {
      warning(msg)
    } else if (code === -2) {
      error(msg)
      store.dispatch(clearAccessToken())
      store.dispatch(logout())
    }
  })
}