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
export const getRecommend = async () =>
  request('/api/home/recommend', getInit())
