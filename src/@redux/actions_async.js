import * as req from '../@api'
import {
  getBlog,
  getTodayRecommend,
  getUserInfo,
  loadBlogList,
  login,
  setAccessToken,
  setRegisterSuccess
} from './actions'

/**
 *
 * @param email
 * @param username
 * @param password
 * @returns {function(*): Promise<void>}
 */
export const loginAsync = ({ email, username, password }) =>
  async dispatch => {
    let { code, msg, data } = await req.login({ email, username, password })
    if (code === 1) {
      let { accessToken } = data || ''
      dispatch(setAccessToken(accessToken))
      dispatch(login({ userId: 1 }))
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
    // debugger
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
      dispatch(getUserInfo({ ...data, userId: 1 }))
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
      dispatch(loadBlogList(data))
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

export const sendVerifyCodeAsync = ({ email }) =>
  async dispatch => {
    const { code, msg } = await req.sendVerifyCode2Email({ email })
    if (code === 1) {
      // dispatch()
    } else {
      alert(msg)
    }
  }

export const getRecommendBlogListAsync  =() =>
  async dispatch => {
    const {code, msg, data} = await  req.getRecommendBlogList()
    console.log(data)
    if (code === 1) {
      dispatch(loadBlogList(data))
    } else {
      alert(msg)
    }
  }
