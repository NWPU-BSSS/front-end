import {getInit, postInit, query, request} from './@config'

/**
 * 上传用户头像
 * @param {file}file
 * @returns {Promise<JSON>}
 */
//TODO: 改成表单上传
export const uploadUserHeadPortrait = async ({file}) =>
    request('/api/user/avatar', postInit({file}))

/**
 * 修改个人信息
 * @returns {Promise<JSON>}
 */
export const editUserInfo = async ({username, nickname, introduction, realName, gender, university, className, academy }) =>
    request(`/api/user/info?${query()}`, postInit({username, nickname, introduction, realName, gender, university, className, academy }))

/**
 * 关注、取关博主
 * @param {number}bloggerId
 * @param {boolean}subscribe
 * @returns {Promise<JSON>}
 */
export const subscribeOrCancelBlogger = async ({bloggerId, subscribe}) =>
    request(`/api/user/subscribe?${query()}`, postInit({bloggerId, subscribe}))

/**
 * 最近浏览的博客
 * @returns {Promise<JSON>}
 */
export const currentBrowseBlog = async () =>
    request('/api/user/browse/blogs', postInit())

/**
 * 获取对某个博主的关注状态
 * @param {string}bloggerId
 * @returns {Promise<JSON>}
 */
export const getSubscribeStatusOfBlogger = async (bloggerId) =>
    request(`/api/user/subscribe?${query({bloggerId})}`, getInit())

/**
 * 获取用户的关注列表
 * @param {string}userId
 * @returns {Promise<JSON>}
 */
export const getUserSubscribeList = async (userId) =>
    request(`/api/user/subscribes?${query({userId})}`,getInit())

/**
 * 获取用户粉丝列表
 * @param userId
 * @returns {Promise<JSON>}
 */
export const getUserFansList = async (userId) =>
    request(`/api/user/fans?${query({userId})}`,getInit())

/**
 * 获取用户详细信息
 * @returns {Promise<JSON>}
 */
export const getUserWholeInfo = async () =>
    request(`/api/user/info?${query()}`, getInit())

