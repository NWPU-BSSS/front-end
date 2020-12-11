import {
  initBloggerPage,
  initBlogPage,
  initHomePage,
  initReleaseBlogPage,
  initUserInfo,
  initUserState
} from './initData'
import {
  DELETE_USER_STATE, EDIT_MARKDOWN, EDIT_TAG, EDIT_TITLE,
  LOAD_USER_STATE, REGISTER_SUCCESS_FALSE, REGISTER_SUCCESS,
  REMEMBER_USER_STATE,
  REMOVE_USER_STATE,
  SAVE_USER_STATE, SEND_VERIFY_EMAIL_SUCCESS, SET_ANNOUNCEMENT,
  SET_BADGE_NUM,
  SET_BASE_INFO, SET_BLOG_COMMENTS,
  SET_BLOG_INFO, SET_BLOG_BLOGGER_INFO, SET_BLOGGER_TAGS, SET_BROWSE_RECORD,
  SET_FANS, SET_FAV_STATUS, SET_LIKE_STATUS,
  SET_RECENT_BROWSE_BLOGS, SET_RECOMMEND_BLOG_LIST, SET_BLOG_PAGE_SUBSCRIBE_STATUS,
  SET_SUBSCRIBES,
  SET_USER_INFO, USE_EN, USE_ZH, SET_BLOGGER_INFO, SET_BLOGGER_BLOGS, SET_BLOGGER_FAV_BLOGS, SET_SEARCH_BLOG_LIST
} from './action-types'
import {
  delete_user_state,
  get_user_state,
  remember_user_state,
  remove_user_state,
  save_user_state
} from '../global'
import { en, zh } from '../@i18n'

/**
 * 保存用户所有的登陆状态
 * @param state
 * @param {{type: string, data: { accessToken: string, userId: number }}} action
 * @returns {{accessToken: string, userId: number}}
 */
export function $UserState (state = initUserState, action) {
  switch (action.type) {
    case REMEMBER_USER_STATE:
      remember_user_state(action.data)
      return action.data
    case REMOVE_USER_STATE:
      remove_user_state()
      return initUserState
    case SAVE_USER_STATE:
      save_user_state(action.data)
      return action.data
    case DELETE_USER_STATE:
      delete_user_state()
      return initUserState
    case LOAD_USER_STATE:
      return get_user_state()
    default:
      return state
  }
}

export function $UserInfoState (state = initUserInfo, { data, type }) {
  switch (type) {
    case SET_BASE_INFO:
      return { ...state, baseInfo: data }
    case SET_BADGE_NUM:
      return { ...state, badgeNum: data }
    case SET_USER_INFO:
      return { ...state, userInfo: data }
    case SET_RECENT_BROWSE_BLOGS:
      return { ...state, recentBrowseBlogs: data }
    case SET_FANS:
      return { ...state, fans: data }
    case SET_SUBSCRIBES:
      return { ...state, subscribes: data }
    default:
      return state
  }
}

export function $BlogPageState (state = initBlogPage, { data, type }) {
  switch (type) {
    case SET_BLOG_INFO:
      return { ...state, ...(data) }
    case SET_BLOG_COMMENTS:
      return { ...state, comments: data }
    case SET_BLOGGER_TAGS:
      return { ...state, tags: data }
    case SET_LIKE_STATUS:
      return { ...state, likeStatus: data }
    case SET_FAV_STATUS:
      return { ...state, favStatus: data }
    case SET_BLOG_BLOGGER_INFO:
      return { ...state, bloggerInfo: data }
    case SET_BLOG_PAGE_SUBSCRIBE_STATUS:
      return { ...state, subscribeStatus: data }
    default:
      return state

  }
}

export function $HomePageState (state = initHomePage, { data, type }) {
  switch (type) {
    case SET_ANNOUNCEMENT:
      return { ...state, announcement: data }
    case SET_BROWSE_RECORD:
      return { ...state, browse: data }
    case SET_RECOMMEND_BLOG_LIST:
      return { ...state, recommendBlogList: data }
    default:
      return state
  }
}

export function $ReleaseBlogPageState (state = initReleaseBlogPage, { data, type }) {
  switch (type) {
    case EDIT_TAG:
      return { ...state, tags: data }
    case EDIT_TITLE:
      return { ...state, title: data }
    case EDIT_MARKDOWN:
      return { ...state, content: data }
    default:
      return state
  }
}

export function $Language (state = en, action) {
  switch (action.type) {
    case USE_EN:
      return en
    case USE_ZH:
      return zh
    default:
      return state
  }
}

export function $BLoggerPageState (state = initBloggerPage, action) {
  let data = action.data
  switch (action.type) {
    case SET_BLOGGER_INFO:
      return {...state, bloggerInfo:  data}
    case SET_BLOGGER_BLOGS:
      return {...state, bloggerBlogs: data}
    case SET_BLOGGER_FAV_BLOGS:
      return {...state, bloggerFavBlogs: data}
    default:
      return state
  }
}

export function $GlobalState (state = {}, action) {
  switch (action.type) {
    // case SEND_VERIFY_EMAIL_SUCCESS:
    //   return { ...state, disableSendCodeButton: true }
    // case REGISTER_SUCCESS_FALSE:
    //   return { ...state, flag }
    case REGISTER_SUCCESS:
      return {  ...state, registerSuccess: true }
    case SET_SEARCH_BLOG_LIST:
      return {...state, searchBlogList: action.data}
    default:
      return state
  }
}
