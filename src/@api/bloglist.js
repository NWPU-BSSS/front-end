import {getInit, postInit, query, request} from './@config'

/**
 * 获取我关注的所有博主的博客列表
 * @param {string}page
 * @returns {Promise<JSON>}
 */
export const getSubscribeBloggerList = async (page) =>
    request(`api/blog/list/followed?${query({page})}`, getInit())

/**
 * 获取我收藏的博客列表
 * @param {string}userId
 * @returns {Promise<JSON>}
 */
export const getFavsBlogList = async (userId) =>
    request(`api/blog/list/favs?${query({userId})}`,getInit())

/**
 * 获取推荐博客列表
 * @param {string}page
 * @returns {Promise<JSON>}
 */
export const getRecommBlogList = async(page) =>
    request(`api/blog/list/recommend?${query({page})}`, getInit())

/**
 * 获取最近发布的博客列表
 * @param {string}page
 * @returns {Promise<JSON>}
 */
export const getCurrentReleaseBlog = async(page) =>
    request(`api/blog/list/recent?${query({page})}`, getInit())

/**
 * 获取某用户的所有博客列表
 * @param {string}page
 * @param {string}userId
 * @returns {Promise<JSON>}
 */
export const getUserBlogList = async(page, userId) =>
    request(`api/blog/list/user?${query({page, userId})}`,getInit())