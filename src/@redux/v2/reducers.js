import { initBlogPage, initUserInfo, initUserState } from './initData'
import {
  DELETE_USER_STATE,
  LOAD_USER_STATE,
  REMEMBER_USER_STATE,
  REMOVE_USER_STATE,
  SAVE_USER_STATE,
  SET_BADGE_NUM,
  SET_BASE_INFO, SET_BLOG_COMMENTS,
  SET_BLOG_INFO, SET_BLOGGER_TAGS,
  SET_FANS, SET_FAV_STATUS, SET_LIKE_STATUS,
  SET_RECENT_BROWSE_BLOGS,
  SET_SUBSCRIBES,
  SET_USER_INFO, USE_EN, USE_ZH
} from './action-types'
import { delete_user_state, get_user_state, remember_user_state, remove_user_state, save_user_state } from '../global'
import { en, zh } from '../../@i18n'

/**
 * 保存用户所有的登陆状态
 * @param state
 * @param {{type: string, data: { accessToken: string, userId: number }}} action
 * @returns {{accessToken: string, userId: number}}
 */
export function $UserState(state = initUserState, action){
  switch (action.type){
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

export function $UserInfoState(state = initUserInfo, action) {
  switch (action.type){
    case SET_BASE_INFO:
      return {...state, baseInfo: action.data}
    case SET_BADGE_NUM:
      return {...state, badgeNum: action.data}
    case SET_USER_INFO:
      return {...state, userInfo: action.data}
    case SET_RECENT_BROWSE_BLOGS:
      return {...state, recentBrowseBlogs: action.data }
    case SET_FANS:
      return {...state, fans: action.data}
    case SET_SUBSCRIBES:
      return {...state, subscribes: action.data}
    default:
      return state
  }
}


export function $BlogPageState (state = initBlogPage, action){
  switch (action.type){
    case SET_BLOG_INFO:
      return {...state, ...action.data}
    case SET_BLOG_COMMENTS:
      return {...state, comments: action.data}
    case SET_BLOGGER_TAGS:
      return {...state, tags: action.data}
    case SET_LIKE_STATUS:
      return {...state, likeStatus: action.data}
    case SET_FAV_STATUS:
      return {...state, favStatus: action.data}
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
