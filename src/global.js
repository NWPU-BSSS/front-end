/*
  本文件为全局操作函数，包含storage 的增删查改
 */

const accessToken = 'accessToken'
const userId = 'userId'

/**
 * 删除用户永久保存的登陆状态本地storage
 */
export function remove_user_state () {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userId')
}

/**
 * 永久保存用户登陆状态
 * @param accessToken accessToken
 * @param userId 用户id
 */
export function remember_user_state ({ accessToken, userId }) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('userId', userId)
}

/**
 * 保存用户状态到回话，关闭浏览器后自动清除登陆状态
 * @param token accessToken
 * @param userId 用户id
 */
export function save_user_state ({ accessToken, userId }) {
  sessionStorage.setItem('accessToken', accessToken)
  sessionStorage.setItem('userId', userId)
}

/**
 * 删除用户临时登陆状态
 */
export function delete_user_state () {
  sessionStorage.removeItem(accessToken)
  sessionStorage.removeItem(userId)
}

/**
 * 获取用户登录状态
 * @returns {{accessToken: string, userId: number}}
 */
export function get_user_state () {
  return {
    accessToken: localStorage.getItem(accessToken) || '',
    userId: Number.parseInt(localStorage.getItem(userId)) || -1
  }
}

/**
 * url 参数 parser
 * @param search
 * @returns {Map<any, any>}
 */
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

/**
 * 设置 admin storage
 * @param admin
 * @param password
 */
export function set_admin_state ({ admin, password }) {
  localStorage.setItem('admin', JSON.stringify({ admin, password }))
}

/**
 * 移除 admin storage
 */
export function remove_admin_state () {
  if (localStorage.getItem('admin')) {
    localStorage.removeItem('admin')
  }
}

/**
 * 获取admin storage
 * @returns {any}
 */
export function get_admin_state () {
  let item = localStorage.getItem('admin')
  return JSON.parse(item)
}

export const ADMIN_USERNAME = 'AlecHe'
export const ADMIN_PASSWORD = 'alec'
export const DEFAULT_AJAX_INTERVAL = 500