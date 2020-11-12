import { LOGIN, LOGOUT, REGISTER } from './action-types'

const initUserState = {userId : -1 ,username: ''}

export function userState (state = initUserState, action) {
  switch (action.type){
    case LOGIN:
      return {...state, ...action.data}
    case LOGOUT:
      return initUserState
    case REGISTER:
      return {...state, ...action.data}
    default:
      return state
  }
}

