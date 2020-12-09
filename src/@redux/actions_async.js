import * as req from '../@api'
import {  asyncResponseHandler } from './@common'
import { initUserState } from './v2/initData'
import {
  getAnnouncement,
  rememberUserState,
  saveUserState, set_blog_info,
  set_recommend_blog_list, set_user_info,
  setBadgeNum,
  setBaseInfo, setRegisterSuccess
} from './v2/actions'

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
    let response = await req.login({ email, username, password })
    let data = await asyncResponseHandler(response)
    let userState = data || initUserState
    if (remember) dispatch(rememberUserState(userState))
    else dispatch(saveUserState(userState))
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
    let response = await req.getBaseInfo()
    let data = await asyncResponseHandler(response)
    dispatch(setBaseInfo(data))
  }

/**
 *
 * @param blogId
 * @returns {function(*): Promise<void>}
 */
export const getBlogAsync = blogId =>
  async dispatch => {
    let response = await req.getBlog({ blogId })
    let data = await asyncResponseHandler(response)
    dispatch(set_blog_info(data))
  }

/**
 *
 * @returns {function(*): Promise<void>}
 */
export const getRecommendBLogListAsync = () =>
  async dispatch => {
    let response = await req.getRecommendBlogList()
    let data = await asyncResponseHandler(response)
    dispatch(set_recommend_blog_list(data))
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
    dispatch(set_recommend_blog_list(data))
  }

export const getAnnouncementAsync = () =>
  async dispatch => {
    const response = await req.getAnnouncement()
    const data = await asyncResponseHandler(response)
    dispatch(getAnnouncement(data))
  }

export const sendVerifyCodeAsync = ({ email }) =>
  async () => await req.sendVerifyCode2Email({ email })

export const getRecommendBlogListAsync = page =>
  async dispatch => {
    const response = await req.getRecommendBlogList(page)
    const data = await asyncResponseHandler(response)
    dispatch(set_recommend_blog_list(data))
  }

export const getBadgeNumAsync = () =>
  async dispatch => {
    const response = await req.getBadgeNum()
    let data = await asyncResponseHandler(response)
    dispatch(setBadgeNum(data))
  }

export const getUserInfoAsync = () =>
  async dispatch => {
    const response = await req.getUserWholeInfo()
    let data = await asyncResponseHandler(response)
    dispatch(set_user_info(data))
  }
