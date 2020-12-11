import { getInit, postInit, query, request } from './@config'

/**
 * 获取我关注的所有博主的博客列表
 * @param {string}page
 * @returns {Promise<JSON>}
 */
export const getSubscribeBloggerList = (page) =>
  request(`/api/blog/list/followed?${query({ page })}`, getInit())

/**
 * 获取我收藏的博客列表
 * @param {string}userId
 * @returns {Promise<JSON>}
 */
export const getFavBlogList = (userId) =>
  request(`/api/blog/list/favs?${query({ userId })}`, getInit())

/**
 * 获取推荐博客列表
 * @param {number} page
 * @returns {Promise<JSON>}
 */
export const getRecommendBlogList = (page = 0) =>
  request(`/api/blog/list/recommend?${query({ page })}`, getInit())

/**
 * 获取最近发布的博客列表
 * @param {string}page
 * @returns {Promise<JSON>}
 */
export const getRecentBlogs = page =>
  request(`/api/blog/list/recent?${query({ page })}`, getInit())

/**
 * 获取某用户的所有博客列表
 * @param {number}page
 * @param {number}userId
 * @returns {Promise<JSON>}
 */
export const getUserBlogList = ({ page, userId }) =>
  request(`/api/blog/list/user?${query({ page, userId })}`, getInit())