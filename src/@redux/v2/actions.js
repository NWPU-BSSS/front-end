import {
  LOAD_USER_STATE,
  REMEMBER_USER_STATE,
  REMOVE_USER_STATE,
  SAVE_USER_STATE,
  USE_EN,
  USE_ZH
} from './action-types'

export const actionFactory = (type, data = undefined) => ({
  type,
  data
})

export const loadUserState = () => actionFactory(LOAD_USER_STATE)

export const useEn = ()=> actionFactory(USE_EN)
export const useZh = ()=> actionFactory(USE_ZH)
export const logout = () => actionFactory(REMOVE_USER_STATE)
export const saveUserState = data => actionFactory(SAVE_USER_STATE, data)