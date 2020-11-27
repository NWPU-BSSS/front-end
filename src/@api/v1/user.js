import { postInit, query } from '../@config'
import axios from 'axios'

/**
 * POST 用户登录
 * @param email 邮箱，string
 * @param password 密码，string
 * @returns {Promise<JSON>}
 */
export async function login ({ email, password }) {
  let response = await fetch('/api/user/login', postInit({ email, password }))
  return await response.json()
}

/**
 * POST 注册用户
 * @param email 邮箱，string
 * @param password 密码，string
 * @param username 用户名，string
 * @param role 0
 * @returns {Promise<JSON>}
 */
export async function register ({ email, password, username, role = 0 }) {
  let response = await fetch('/api/user/register', postInit({ email, password, userName: username, role }))
  return await response.json()
}

/**
 * GET 通过userId获取用户详细信息
 * @param userId 用户id，number
 * @returns {Promise<JSON>}
 */
export async function getUserInfo ({ userId }) {
  let response = await fetch(`/api/user/info?${query({ userId })}`)
  return await response.json()
}