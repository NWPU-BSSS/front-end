import {
  LOGIN,
  LOGOUT,
  GET_USER_INFO,
  GET_ARTICLE_INFO,
  GET_ARTICLE_LIST,
  SHOW_NAV_MENU,
  HIDE_NAV_MENU, REGISTER_SUCCESS_TRUE, REGISTER_SUCCESS_FALSE, GET_TODAY_RECOMMEND, INPUT_MARKDOWN, EDIT_TAG
} from './action-types'

import * as req from '../@api'

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

/**
 * 同步获取用户信息
 * @param username
 * @param email
 * @param userId
 * @returns {{data: {userId: *, email: *, username: *}, type: string}}
 */
export const getUserInfo = ({ username, email, userId }) =>
  ({
    type: GET_USER_INFO,
    data: { username, email, userId }
  })

export const logout = () =>
  ({
    type: LOGOUT
  })

export const getBlog = ({ articleId, title, content, author, time }) =>
  ({
    type: GET_ARTICLE_INFO,
    data: { articleId, title, content, time, author }
  })
export const loadArticleList = list =>
  ({
    type: GET_ARTICLE_LIST,
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

/**
 *
 * @param email
 * @param username
 * @param password
 * @returns {function(*): Promise<void>}
 */
export const loginAsync = ({ email, username, password }) =>
  async dispatch => {
    const { code, msg } = await req.login({ email, username, password })
    if (code === 1) {
      dispatch(login({ email, username, userId: 1 }))
    } else {
      alert(msg)
    }
  }
/**
 *
 * @param username
 * @param password
 * @param email
 * @param verifyCode
 * @returns {function(*): Promise<void>}
 */
export const registerAsync = ({ username, password, email, verifyCode }) =>
  async dispatch => {
    const { code, msg, data } = await req.register({ email, password, username, verifyCode })
    if (code === 1) {
      dispatch(login({ username, ...data }))
      dispatch(setRegisterSuccess(true))
      // dispatch(showNav())
    } else {
      alert(msg)
    }
  }

/**
 *
 * @returns {function(*): Promise<void>}
 */
export const getBaseInfoAsync = () =>
  async dispatch => {
    const { code, msg, data } = await req.getBaseInfo()
    if (code === 1) {
      dispatch(getUserInfo({ ...data }))
    } else {
      alert(msg)
    }
  }

/**
 *
 * @param blogId
 * @returns {function(*): Promise<void>}
 */
export const getBlogAsync = blogId =>
  async dispatch => {
    const { code, msg, data } = await req.getBlog({ blogId })
    if (code === 1) {
      dispatch(getBlog({ ...data, blogId }))
    } else {
      alert(msg)
    }
  }
/**
 *
 * @returns {function(*): Promise<void>}
 */
export const getRecommendBLogListAsync = () =>
  async dispatch => {
    const { code, msg, data } = await req.getRecommendBlogList()
    if (code === 1) {
      dispatch(loadArticleList(data))
    } else {
      alert(msg)
    }
  }
/**
 *
 * @param title
 * @param content
 * @returns {function(*): Promise<void>}
 */
export const releaseBlogAsync = ({ title, content }) =>
  async dispatch => {

    // eslint-disable-next-line no-unused-vars
    const { code, msg, data } = await req.releaseBlog({ title, content })
    if (code === 1) {
      // dispatch(loadArticleList(data))
      alert('发布成功')
    } else {
      alert(msg)
    }
  }

export const getTodayRecommendAsync = () =>
  async dispatch => {
    const { code, msg, data } = await req.getTodayRecommend()
    if (code === 1) {
      dispatch(getTodayRecommend({ ...data }))
    } else {
      alert(msg)
    }
  }
