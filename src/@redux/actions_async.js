import * as req from '../@api'
import {
  getBadgeNum,
  getBlog,
  getTodayRecommend,
  getUserInfo,
  loadBlogList,
  login,
  setAccessToken,
  setRegisterSuccess
} from './actions'
import {  asyncResponseHandler } from './@common'

/**
 *
 * @param email
 * @param username
 * @param password
 * @param remember
 * @returns {function(*): Promise<void>}
 */
export const loginAsync = ({ email, username, password, remember }) =>
  async dispatch => {
    // let { code, msg, data } = await req.login({ email, username, password })
    // if (code === 1) {
    //   let { accessToken } = data || ''
    //   localStorage.setItem('accessToken', accessToken)
    //   dispatch(setAccessToken(accessToken))
    //   dispatch(login({ userId: 1 }))
    // } else {
    //   alert(msg)
    // }

    let response = await req.login({ email, username, password })
    let data = await asyncResponseHandler(response)
    let { accessToken } = data || ''
    if (remember) localStorage.setItem('accessToken', accessToken)
    dispatch(setAccessToken(accessToken))
    dispatch(login({ userId: 1 }))

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
    // const { code, msg, data } = await req.register({ email, password, username, verifyCode })
    // if (code === 1) {
    //   dispatch(setRegisterSuccess(true))
    // } else {
    //   alert(msg)
    // }
    let response = await req.register({ email, password, username, verifyCode })
    await asyncResponseHandler(response)
    dispatch(setRegisterSuccess(true))
  }

/**
 *
 * @returns {function(*): Promise<void>}
 */
export const getBaseInfoAsync = () =>
  async dispatch => {
    // const { code, msg, data } = await req.getBaseInfo()
    // if (code === 1) {
    //   dispatch(getUserInfo({ ...data, userId: 1 }))
    // } else {
    //   alert(msg)
    // }
    let response = await req.getBaseInfo()
    let data = await asyncResponseHandler(response)
    dispatch(getUserInfo({ ...data, userId: 1 }))
  }

/**
 *
 * @param blogId
 * @returns {function(*): Promise<void>}
 */
export const getBlogAsync = blogId =>
  async dispatch => {
    // const { code, msg, data } = await req.getBlog({ blogId })
    // if (code === 1) {
    //   dispatch(getBlog({ ...data, blogId }))
    // } else {
    //   alert(msg)
    // }
    let response = await req.getBlog({ blogId })
    let data = await asyncResponseHandler(response)
    dispatch(getBlog({ ...data, blogId }))
  }
/**
 *
 * @returns {function(*): Promise<void>}
 */
export const getRecommendBLogListAsync = () =>
  async dispatch => {
    // const { code, msg, data } = await req.getRecommendBlogList()
    // if (code === 1) {
    //   dispatch(loadBlogList(data))
    // } else {
    //   alert(msg)
    // }
    let response = await req.getRecommendBlogList()
    let data = await asyncResponseHandler(response)
    dispatch(loadBlogList(data))

  }
/**
 *
 * @param title
 * @param content
 * @param tagA
 * @param tagB
 * @param tagC
 * @returns {function(*): Promise<void>}
 */
export const releaseBlogAsync = ({ title, content, tagA, tagB, tagC }) =>
  async dispatch => {
    // eslint-disable-next-line no-unused-vars
    const response = await req.releaseBlog({ title, content, tagA, tagB, tagC })
    let data = await asyncResponseHandler(response)
    dispatch(loadBlogList(data))
  }

export const getTodayRecommendAsync = () =>
  async dispatch => {
    const response = await req.getTodayRecommend()
    const data = await asyncResponseHandler(response)
    dispatch(getTodayRecommend(data))
  }

export const sendVerifyCodeAsync = ({ email }) =>
  async () => await req.sendVerifyCode2Email({ email })

export const getRecommendBlogListAsync = () =>
  async dispatch => {
    const response = await req.getRecommendBlogList()
    const data = await asyncResponseHandler(response)
    dispatch(loadBlogList(data))
  }

export const getBadgeNumAsync = () =>
  async dispatch => {
    const response = await req.getBadgeNum()
    let data = await asyncResponseHandler(response)
    dispatch(getBadgeNum(data))
  }

export const getUserInfoAsync = () =>
  async dispatch => {
    const response = await req.getBaseInfo()
    let data = await asyncResponseHandler(response)
    dispatch(getUserInfo(data))
  }
