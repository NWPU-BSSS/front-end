import { getInit, postInit, query, request, uploadFile, uploadFileInit } from './@config'

/**
 * 上传用户头像
 * @param {file}file
 * @returns {Promise<JSON>}
 */
//TODO: 改成表单上传
export const uploadUserHeadPortrait = async ({ file }) =>
  request('/api/user/avatar', postInit({ file }))

/**
 * //TODO: 由于后端api对应没有弄对，此处暂时引用userName
 * 修改个人信息
 * @returns {Promise<JSON>}
 */
export const editUserInfo = async ({ userName, nickname, introduction, realName, gender, university, className, academy }) =>
  request(`/api/user/info?${query()}`, postInit({
    nickname,
    introduction,
    realName,
    gender,
    university,
    className,
    academy,
    userName
  }))

/**
 * 关注、取关博主
 * @param {number}bloggerId
 * @param {boolean}subscribe
 * @returns {Promise<JSON>}
 */
export const subscribeOrCancelBlogger = async ({ bloggerId, subscribe }) =>
  request(`/api/user/subscribe?${query()}`, postInit({ bloggerId, subscribe }))

/**
 * 最近浏览的博客
 * @returns {Promise<JSON>}
 */
export const getMyBrowseBlog = async () =>
  request(`/api/user/browse/blogs?${query()}`, postInit())

/**
 * 获取对某个博主的关注状态
 * @param {string}bloggerId
 * @returns {Promise<JSON>}
 */
export const getSubscribeStatusOfBlogger = async (bloggerId) =>
  request(`/api/user/subscribe?${query({ bloggerId })}`, getInit())

/**
 * 获取用户的关注列表
 * @returns {Promise<JSON>}
 * @param bloggerId
 */
export const getUserSubscribeList = async (bloggerId) =>
  request(`/api/user/subscribes?${query({ bloggerId })}`, getInit())

/**
 * 获取用户粉丝列表
 * @returns {Promise<JSON>}
 * @param bloggerId
 */
export const getUserFansList = bloggerId =>
  request(`/api/user/fans?${query({ bloggerId })}`, getInit())

/**
 * 获取用户详细信息
 * @returns {Promise<JSON>}
 */
export const getUserWholeInfo = async () =>
  request(`/api/user/info?${query()}`, getInit())

export const uploadUserAvatar = file =>
  uploadFile(`/api/user/avatar?${query()}`, uploadFileInit(file) )


