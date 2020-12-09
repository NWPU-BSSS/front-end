import { getInit, postInit, request, query } from './@config'

/**
 * 用户注册
 * @param {string} username 用户名（账户名，唯一）
 * @param {string} password 密码
 * @param {string} email 邮箱
 * @param {number} verifyCode 邮箱验证码
 * @returns {Promise<JSON>}
 */
export const register = async ({ username, password, email, verifyCode }) =>
  request('/api/register', postInit({ username, password, email, verifyCode }))

/**
 * 客户端用户登陆
 * @param password
 * @param email
 * @param username
 * @returns {Promise<*>}
 */
export const login = async ({ password, email, username }) =>
  request('/api/login', postInit({ username, password, email }))

export const sendVerifyCode2Email = async ({ email }) =>
  request('/api/register/verifyCode', postInit({ email }))

/**
 * 获取用户基本信息，显示在导航栏和首页
 * @returns {Promise<JSON>}
 */
export const getBaseInfo = async () =>
  request('/api/baseInfo', getInit())

export const getBadgeNum = async () =>
  request('/api/badgeNum', getInit())

export const checkUsernameExist = async username =>
  request('/api/usernameCheck', postInit({ username }))

export const checkEmailExist = async email =>
  request('/api/emailCheck', postInit({email}))

/**
 * 关键词搜索博客
 * @param {string}word
 * @returns {Promise<JSON>}
 */
export const keySearchBlog = async ({word}) =>
    request(`/api/search?${query({word})}`, getInit())
