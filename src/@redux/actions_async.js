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
  set_search_blog_list,
  set_fav_blogs,
  set_my_fans,
  set_my_subscribes,
  set_my_blogs,
  set_recent_blogList,
  set_followed_blog_list,
  set_blogger_fans,
  set_blogger_subscribe,
  admin_set_user_list,
  admin_set_blog_list,
  set_my_browse, admin_delete_user, admin_delete_blog, set_blogger_subscribe_status
} from './actions'
import { SET_MY_FANS, SET_SEARCH_BLOG_LIST } from './action-types'

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

export const subscribeBlogPageBloggerAsync = ({ bloggerId, subscribe }) =>
  async dispatch => {
    const response = await req.subscribeOrCancelBlogger({ bloggerId, subscribe })
    await asyncResponseHandler(response)
    dispatch(set_blog_page_subscribe_status(subscribe))
  }

export const subscribeBloggerPageBloggerAsync = ({ bloggerId, subscribe }) =>
  async dispatch => {
    const response = await req.subscribeOrCancelBlogger({ bloggerId, subscribe })
    await asyncResponseHandler(response)
    dispatch(set_blogger_subscribe_status(subscribe))
  }

export const getBlogPageSubscribeStatusAsync = bloggerId =>
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

/**
 * //TODO: 等后端API改好后，去掉userName 字段
 * 异步设置用户信息
 * @param userName
 * @param nickname
 * @param introduction
 * @param realName
 * @param gender
 * @param university
 * @param className
 * @param academy
 * @returns {function(*): Promise<void>}
 */
export const setUserInfoAsync = ({ username, nickname, introduction, realName, gender, university, className, academy }) =>
  async dispatch => {
    const response = await req.editUserInfo({
      nickname,
      introduction,
      realName,
      gender,
      university,
      className,
      academy,
      //TODO
      userName: username
    })
    await asyncResponseHandler(response)
    dispatch(set_user_info({ username, nickname, introduction, realName, gender, university, className, academy }))
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

/**
 * 获取某博主收藏的博客列表
 * @param userId
 * @returns {function(*): Promise<void>}
 */
export const getBloggerFavBlogsAsync = userId =>
  async dispatch => {
    const response = await req.getFavBlogList(userId)
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_fav_blogs(data))
  }

export const getBlogLikeStatusAsync = blogId =>
  async dispatch => {
    const response = await req.getStatusOfLikeBlog(blogId)
    let { status } = await asyncResponseHandler(response)
    dispatch(set_like_status(status))
  }

export const getBlogFavStatusAsync = blogId =>
  async dispatch => {
    const response = await req.getStatusOfFavoriteBlog(blogId)
    let { status } = await asyncResponseHandler(response)
    dispatch(set_fav_status(status))
  }

export const getBloggerPageSubscribeStatusAsync = bloggerId =>
  async dispatch => {
    const response = await req.getSubscribeStatusOfBlogger(bloggerId)
    let { status } = await asyncResponseHandler(response)
    dispatch(set_blogger_subscribe_status(status))
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

export const releaseAnnouncementAsync = ({}) =>
  async dispatch => {
    // const response = await req.keySearchBlog()
    // let data = await asyncResponseHandler(response)
    // dispatch(set_search_blog_list(data))
  }

/**
 * 获取指定用户的粉丝列表
 * @param bloggerId
 * @returns {function(*): Promise<void>}
 */
export const getUserFansAsync = bloggerId =>
  async dispatch => {
    const response = await req.getUserFansList(bloggerId)
    let data = await asyncResponseHandler(response)
    dispatch(set_my_fans(data))
  }

export const getUserSubscribesAsync = bloggerId =>
  async dispatch => {
    const response = await req.getUserSubscribeList(bloggerId)
    let data = await asyncResponseHandler(response)
    dispatch(set_my_subscribes(data))
  }

/**
 *
 * @returns {function(*): Promise<void>}
 */
export const getMyBLogsAsync = ({ userId, page }) =>
  async dispatch => {
    const response = await req.getUserBlogList({ page: page || 0, userId })
    let data = await asyncResponseHandler(response)
    dispatch(set_my_blogs(data))
  }

export const getFavBlogsAsync = bloggerId =>
  async dispatch => {
    const response = await req.getFavBlogList(bloggerId)
    let data = await asyncResponseHandler(response)
    dispatch(set_fav_blogs(data))
  }

export const getRecentBlogListAsync = page =>
  async dispatch => {
    const response = await req.getRecentBlogs(page || 0)
    let data = await asyncResponseHandler(response)
    dispatch(set_recent_blogList(data))
  }

export const getFollowedBloggerBlogListAsync = page =>
  async dispatch => {
    const response = await req.getSubscribeBloggerList(page || 0)
    let data = await asyncResponseHandler(response)
    dispatch(set_followed_blog_list(data))
  }

export const getBloggerFansAsync = bloggerId =>
  async dispatch => {
    const response = await req.getUserFansList(bloggerId)
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_fans(data))
  }

export const getBloggerSubscribesAsync = bloggerId =>
  async dispatch => {
    const response = await req.getUserSubscribeList(bloggerId)
    let data = await asyncResponseHandler(response)
    dispatch(set_blogger_subscribe(data))
  }

export const uploadUserAvatarAsync = file =>
  async dispatch => {
    const response = await req.uploadUserAvatar(file)
    await asyncResponseHandler(response)
    success('Success')
    let data = await asyncResponseHandler(await req.getUserWholeInfo())
    dispatch(set_user_info(data))
  }

export const getAllUsersListAsync = () =>
  async dispatch => {
    const response = await req.getAllUserList()
    let data = await asyncResponseHandler(response)
    dispatch(admin_set_user_list(data))
  }

export const getAllBlogListAsync = () =>
  async dispatch => {
    const response = await req.getAllBlogList()
    let data = await asyncResponseHandler(response)
    dispatch(admin_set_blog_list(data))
  }

export const getMyBrowseAsync = () =>
  async dispatch => {
    const response = await req.getMyBrowseBlog()
    let data = await asyncResponseHandler(response)
    dispatch(set_my_browse(data))
  }

export const deleteUserAsync = ({ admin, password, userId, index }) =>
  async dispatch => {
    const response = await req.deleteUser(({ admin, password, userId }))
    await asyncResponseHandler(response)
    dispatch(admin_delete_user(index))
  }

export const deleteBlogAsync = ({ admin, password, blogId, index }) =>
  async dispatch => {
    const response = await req.deleteBlog(({ admin, password, blogId }))
    await asyncResponseHandler(response)
    dispatch(admin_delete_blog(index))
  }