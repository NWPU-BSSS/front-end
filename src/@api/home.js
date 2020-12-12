import { getInit, request } from './@config'

/**
 * 获取一条公告
 * @returns {Promise<JSON>}
 */
export const getAnnouncement = async () =>
    request('/api/home/announcement', getInit())