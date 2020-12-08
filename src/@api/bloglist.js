import { getInit, postInit, query, request } from './@config'

/**
 *
 * @param {number} page
 * @param {number} userId
 * @returns {Promise<JSON>}
 */
export const getUserBlogList = async ({ page, userId }) =>
  request(`/api/blog/list/user?${query({ page, userId })}`, getInit())