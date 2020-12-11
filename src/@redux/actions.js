import {
  EDIT_MARKDOWN,
  EDIT_TAG,
  EDIT_TITLE,
  LOAD_USER_STATE, REGISTER_SUCCESS_FALSE, REGISTER_SUCCESS,
  REMEMBER_USER_STATE,
  REMOVE_USER_STATE,
  SAVE_USER_STATE,
  SET_ANNOUNCEMENT,
  SET_BADGE_NUM,
  SET_BASE_INFO, SET_BLOG_COMMENTS,
  SET_BLOG_INFO, SET_BLOG_BLOGGER_INFO, SET_BLOGGER_TAGS, SET_FAV_STATUS, SET_LIKE_STATUS,
  SET_RECOMMEND_BLOG_LIST, SET_BLOG_PAGE_SUBSCRIBE_STATUS,
  SET_USER_INFO,
  USE_EN,
  USE_ZH, SET_BLOGGER_INFO, SET_BLOGGER_BLOGS, SET_BLOGGER_FAV_BLOGS
} from './action-types'

export const actionFactory = (type, data = undefined) => ({
  type,
  data
})

export const useEn = () => actionFactory(USE_EN)
export const useZh = () => actionFactory(USE_ZH)

/*
  UserState Action
 */
export const loadUserState = () => actionFactory(LOAD_USER_STATE)
export const logout = () => actionFactory(REMOVE_USER_STATE)
export const saveUserState = data => actionFactory(SAVE_USER_STATE, data)
export const rememberUserState = data => actionFactory(REMEMBER_USER_STATE, data)
/*
  UserInfoState Action
 */
export const setBaseInfo = data => actionFactory(SET_BASE_INFO, data)
export const setBadgeNum = data => actionFactory(SET_BADGE_NUM, data)
export const set_user_info = data => actionFactory(SET_USER_INFO, data)

/*
  HomePageState Action
 */

export const set_announcement = data => actionFactory(SET_ANNOUNCEMENT, data)
export const set_recommend_blog_list = data => actionFactory(SET_RECOMMEND_BLOG_LIST, data)

/*
  ReleaseBlogPage Action
 */
export const editTag = data => actionFactory(EDIT_TAG, data)
export const editTitle = data => actionFactory(EDIT_TITLE, data)
export const editMarkdown = data => actionFactory(EDIT_MARKDOWN, data)

/*
  BlogPage Action
 */
export const set_blog_info = data => actionFactory(SET_BLOG_INFO, data)
export const set_blog_comments = data => actionFactory(SET_BLOG_COMMENTS, data)
export const set_blogger_tags = data => actionFactory(SET_BLOGGER_TAGS, data)
export const set_like_status = data => actionFactory(SET_LIKE_STATUS, data.status)
export const set_fav_status = data => actionFactory(SET_FAV_STATUS, data.status)
export const set_blog_blogger_info = data => actionFactory(SET_BLOG_BLOGGER_INFO, data)
export const set_blog_page_subscribe_status = data => actionFactory(SET_BLOG_PAGE_SUBSCRIBE_STATUS, data)

/*
  BloggerPage Action
 */
export const set_blogger_info = data => actionFactory(SET_BLOGGER_INFO, data)
export const set_blogger_blogs =data => actionFactory(SET_BLOGGER_BLOGS, data)
export const set_blogger_fav_blogs = data => actionFactory(SET_BLOGGER_FAV_BLOGS, data)

/*
  Global Action
 */
export const setRegisterSuccess = () => actionFactory(REGISTER_SUCCESS)