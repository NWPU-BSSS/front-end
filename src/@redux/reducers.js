import {
  GET_BADGE_NUM,
  GET_BLOG_INFO,
  GET_BLOG_LIST, GET_TODAY_RECOMMEND, GET_USER_INFO,
  LOGIN,
  LOGOUT,
  REGISTER, REGISTER_SUCCESS_FALSE, REGISTER_SUCCESS_TRUE, SEND_VERIFY_EMAIL_SUCCESS, SET_ACCESS_TOKEN, USE_EN, USE_ZH,
} from './action-types'


const initUserState = { userId: -1, username: '' }




export function UserState (state = initUserState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.data }
    case LOGOUT:
      return initUserState
    case REGISTER:
      return { ...state, ...action.data }
    case GET_USER_INFO:
      return { ...state, ...action.data }
    case GET_BADGE_NUM:
      return { ...state, badgeNum: action.data }
    default:
      return state
  }
}
