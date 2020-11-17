import {
  GET_ARTICLE_INFO,
  GET_ARTICLE_LIST,
  HIDE_NAV_MENU,
  LOGIN,
  LOGOUT,
  REGISTER, REGISTER_SUCCESS_FALSE, REGISTER_SUCCESS_TRUE, SET_ACCESS_TOKEN,
  SHOW_NAV_MENU
} from './action-types'

const initUserState = { userId: -1, username: '' }

export function AccessToken (state = '', action ){
  switch (action.type){
    case SET_ACCESS_TOKEN:
      return action.data
    default:
      return state
  }
}

export function userState (state = initUserState, action) {
  switch (action.type) {
    case LOGIN:
      //TODO: 后期解决路由跳转
      // window.location.pathname = '/'
      return { ...state, ...action.data }
    case LOGOUT:
      return initUserState
    case REGISTER:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export function showNav (state = true, action) {
  switch (action.type) {
    case SHOW_NAV_MENU:
      return true
    case HIDE_NAV_MENU:
      return false
    default:
      return state
  }
}

export function article (state = {}, action) {
  switch (action.type) {
    case GET_ARTICLE_INFO:
      return { ...state, articleInfo: action.data }
    case GET_ARTICLE_LIST:
      return { ...state, articleList: action.data }
    default:
      return state
  }
}

export function registerSuccess (state = false, action) {
  console.log(state, action)
  switch (action.type) {
    case REGISTER_SUCCESS_FALSE:
      return false
    case REGISTER_SUCCESS_TRUE:
      return true
    default:
      return state
  }
}


