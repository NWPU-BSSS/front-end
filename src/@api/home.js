import { getInit, request } from './@config'

/**
 * 获取推荐的博客列表
 * @returns {Promise<JSON>}
 */
export const getRecommendBlogList = async () =>
  request('/api/home/blog/recommend', getInit())

/**
 * 获取今日推荐
 * @returns {Promise<JSON>}
 */
export const getTodayRecommend = async () =>
  request('/api/home/recommend', getInit())

/**
 * 获取一条公告
 * @returns {Promise<JSON>}
 */
export const getAnnouncement = async () =>
    request('/api/announcement', getInit())