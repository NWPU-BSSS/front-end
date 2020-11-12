import { HIDE_NAV_MENU, LOGIN, LOGOUT, REGISTER, SHOW_NAV_MENU } from './action-types'

const initUserState = { userId: -1, username: '' }

export function userState (state = initUserState, action) {
  switch (action.type) {
    case LOGIN:
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

