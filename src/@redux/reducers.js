import { LOGIN, LOGOUT, REGISTER } from './action-types'

export function userState (state = {}, action) {
  switch (action.type){
    case LOGIN:
      return {...state, ...action.data}
    case LOGOUT:
      return {}
    case REGISTER:
      return {...state, ...action.data}
    default:
      return state
  }
}

