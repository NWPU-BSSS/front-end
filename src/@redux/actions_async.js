import * as req from '../@api'
import { asyncResponseHandler, success } from './@common'
import { initUserState } from './initData'
import {
  set_announcement,
  rememberUserState,
  saveUserState,
  set_blog_info,
  set_recommend_blog_list,
  set_user_info,
  setBadgeNum,
  setBaseInfo,
  setRegisterSuccess,
  set_blog_comments,
  set_blog_blogger_info,
  set_blogger_tags,
  set_blog_page_subscribe_status,
  set_blogger_info,
  set_blogger_blogs,
  set_blogger_fav_blogs,
  set_like_status,
  set_fav_status,
  set_search_blog_list
} from './actions'
import { SET_SEARCH_BLOG_LIST } from './action-types'

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
    dispatch(setRegisterSuccess())
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
    await asyncResponseHandler(response)
    success('Success!')
  }

export const getAnnouncementAsync = () =>
  async dispatch => {
    const response = await req.getAnnouncement()
    const data = await asyncResponseHandler(response)
    dispatch(set_announcement(data))
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

export const addCommentAsync = ({ blogId, content, commentId = 0 }) =>
  async dispatch => {
    const response1 = await req.addComment({ blogId, content, commentId })
    await asyncResponseHandler(response1)
    const response2 = await req.getComments({ blogId })
    let data2 = await asyncResponseHandler(response2)
    dispatch(set_blog_comments(data2))
  }

export const getCommentsAsync = blogId =>
  async dispatch => {
    const response = await req.getComments({ blogId })
    let data = await asyncResponseHandler(response)
    dispatch(set_blog_comments(data))
  }

export const getBlogBloggerInfoAsync = bloggerId =>
  async dispatch => {
    const response = await req.getBlogger({ bloggerId })
    let data = await asyncResponseHandler(response)
    dispatch(set_blog_blogger_info(data))
  }

export const getBloggerTagsAsync = bloggerId =>
  async dispatch => {
    const response = await req.getTags({ bloggerId })
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_tags(data))
  }

export const subscribeAsync = ({ bloggerId, subscribe }) =>
  async dispatch => {
    const response = await req.subscribeOrCancelBlogger({ bloggerId, subscribe })
    await asyncResponseHandler(response)
    dispatch(set_blog_page_subscribe_status(subscribe))
  }

export const getSubscribeStatusAsync = bloggerId =>
  async dispatch => {
    const response = await req.getSubscribeStatusOfBlogger(bloggerId)
    let { status } = await asyncResponseHandler(response)
    dispatch(set_blog_page_subscribe_status(status))
  }

export const getBloggerInfoAsync = bloggerId =>
  async dispatch => {
    const response = await req.getBlogger({ bloggerId })
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_info(data))
  }

export const setUserInfoAsync = ({ username, nickname, introduction, realName, gender, university, className, academy }) =>
  async dispatch => {
    const response = await req.editUserInfo({
      username,
      nickname,
      introduction,
      realName,
      gender,
      university,
      className,
      academy
    })
    let data = await asyncResponseHandler(response)
    dispatch(set_user_info(data))
  }

/**
 *
 * @param userId
 * @param page
 * @returns {function(*): Promise<void>}
 */
export const getBloggerBlogsAsync = ({ userId, page }) =>
  async dispatch => {
    const response = await req.getUserBlogList({ userId, page })
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_blogs(data))
  }

export const getBloggerFavBlogsAsync = userId =>
  async dispatch => {
    const response = await req.getFavBlogList(userId)
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_fav_blogs(data))
  }

export const getBlogLikeStatusAsync = blogId =>
  async dispatch => {
    const response = await req.getStatusOfLikeBlog(blogId)
    let data = await asyncResponseHandler(response)
    dispatch(set_like_status(data.status))
  }

export const getBlogFavStatusAsync = blogId =>
  async dispatch => {
    const response = await req.getStatusOfFavoriteBlog(blogId)
    let data = await asyncResponseHandler(response)
    dispatch(set_fav_status(data.status))
  }

export const setBlogLikeStatusAsync = ({ blogId, like }) =>
  async dispatch => {
    const response = await req.likeBlog(({ blogId, like }))
    await asyncResponseHandler(response)
    dispatch(set_like_status(like))
  }

export const setBlogFavStatusAsync = ({ blogId, favorite }) =>
  async dispatch => {
    const response = await req.favBlog(({ blogId, favorite }))
    await asyncResponseHandler(response)
    dispatch(set_fav_status(favorite))
  }

  export const getSearchResultAsync = word =>
    async dispatch => {
      const response = await req.keySearchBlog(word)
      let data = await asyncResponseHandler(response)
      dispatch(set_search_blog_list(data))
    }

