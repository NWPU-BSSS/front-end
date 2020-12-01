import {
  CLEAR_ACCESS_TOKEN,
  EDIT_TAG, EDIT_TITLE, GET_ANNOUNCEMENT, GET_BADGE_NUM,
  GET_BLOG_INFO,
  GET_BLOG_LIST,
  GET_TODAY_RECOMMEND,
  GET_USER_INFO,
  INPUT_MARKDOWN,
  LOGIN,
  LOGOUT,
  REGISTER_SUCCESS_FALSE,
  REGISTER_SUCCESS_TRUE,
  SET_ACCESS_TOKEN,
  USE_EN,
  USE_ZH
} from './action-types'

/**
 * 同步登陆Action
 * @param username
 * @param email
 * @param userId
 * @returns {{data: {userId: *, email: *, username: *}, type: string}}
 */
export const login = ({ username, email, userId }) =>
  ({
    type: LOGIN,
    data: { username, email, userId }
  })

export const setAccessToken = token =>
  ({
    type: SET_ACCESS_TOKEN,
    data: token
  })

export const clearAccessToken = () =>
  ({
    type: CLEAR_ACCESS_TOKEN
  })

export const useEn = () =>
  ({
    type: USE_EN
  })

export const useZh = () =>
  ({
    type: USE_ZH
  })

/**
 * 同步获取用户信息
 * @param {{userId: number}} info
 * @returns {{data: {userId: *, email: *, username: *}, type: string}}
 */
export const getUserInfo = (info) =>
  ({
    type: GET_USER_INFO,
    data: { ...info }
  })

export const logout = () =>
  ({
    type: LOGOUT
  })

export const getBlog = (info) =>
  ({
    type: GET_BLOG_INFO,
    data: info
  })
export const loadBlogList = list =>
  ({
    type: GET_BLOG_LIST,
    data: list
  })

export const setRegisterSuccess = flag =>
  flag ?
    ({ type: REGISTER_SUCCESS_TRUE })
    :
    ({ type: REGISTER_SUCCESS_FALSE })

export const getTodayRecommend = ({ announcementId, title, publisher, startTime, endTime, publishTime, content }) =>
  ({
    type: GET_TODAY_RECOMMEND,
    data: { announcementId, title, publisher, startTime, endTime, publishTime, content }
  })

export const inputMarkdown = content =>
  ({
    type: INPUT_MARKDOWN,
    data: content
  })

export const editTag = ({ tagA, tagB, tagC }) =>
  ({
    type: EDIT_TAG,
    data: { tagA, tagB, tagC }
  })

export const editTitle = title =>
  ({
    type: EDIT_TITLE,
    data: title
  })

export const getBadgeNum = badgeList =>
  ({
    type: GET_BADGE_NUM,
    data: badgeList
  })

