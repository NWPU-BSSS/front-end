import { getInit, postInit, query, request } from './@config'

//
/**
 //  * 删除某个博客
 //  * @param {string}admin
 //  * @param {string}password
 //  * @param {string}blogId
 //  * @returns {Promise<JSON>}
 //  */
// export const deleteBlog = async({admin, password, blogId}) =>
//
// /**
//  * 删掉用户（删库）
//  * @param {string}admin
//  * @param {string}userId
//  * @param {string}password
//  * @returns {Promise<JSON>}
//  */
// export const deleteUser = async({admin, userId, password}) =>

/**
 * 发布公告
 * @param {string}admin
 * @param {string}password
 * @param {string}content
 * @param {string}title
 * @param {string}endTime
 * @param {string}startTime
 * @returns {Promise<*>}
 */
export const releaseAnnouncement = async ({ admin, password, content, title, endTime, startTime }) =>
  request('/api/admin/announcement', postInit({ admin, password, content, title, endTime, startTime }))

/**
 * 获取所有博客列表
 * @returns {Promise<JSON>}
 */
export const getAllBlogList = () =>
  request('/api/admin/blogs')

/**
 * 获取用户列表
 * @returns {Promise<JSON>}
 */
export const getAllUserList = async () =>
  request('/api/admin/users')

