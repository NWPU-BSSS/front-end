import {
  LOGIN,
  LOGOUT,
  GET_USER_INFO,
  GET_ARTICLE_INFO,
  GET_ARTICLE_LIST,
  SHOW_NAV_MENU,
  HIDE_NAV_MENU, REGISTER_SUCCESS_TRUE, REGISTER_SUCCESS_FALSE
} from './action-types'

import * as req from '../@api'

export const showNav = () => ({ type: SHOW_NAV_MENU })
export const hideNav = () => ({ type: HIDE_NAV_MENU })

export const login = ({ username, email, userId }) => ({
  type: LOGIN,
  data: { username, email, userId }
})

export const getUserInfo = ({ username, email, userId }) => ({
  type: GET_USER_INFO,
  data: { username, email, userId }
})

export const logout = () => ({ type: LOGOUT })

export const getArticleInfo = ({ articleId, title, content, author, time }) => ({
  type: GET_ARTICLE_INFO,
  data: { articleId, title, content, time, author }
})
export const loadArticleList = list => ({ type: GET_ARTICLE_LIST, data: list })

export const setRegisterSuccess = flag => flag ? ({ type: REGISTER_SUCCESS_TRUE }) : ({ type: REGISTER_SUCCESS_FALSE })

export const loginAsync = (email, password) =>
  async dispatch => {
    const { code, msg } = await req.login({ email, password })
    if (code === 1) {
      dispatch(login({ email, userId: 1, username: email }))
    } else {
      alert(msg)
    }
  }

export const registerAsync = (username, password, email) =>
  async dispatch => {
    const { code, msg, data } = await req.register({ email, password, username })
    if (code === 1) {
      dispatch(login({ username, ...data }))
      dispatch(setRegisterSuccess(true))
      // dispatch(showNav())
    } else {
      alert(msg)
    }
  }

export const getUserInfoAsync = userId =>
  async dispatch => {
    const { code, msg, data } = await req.getUserInfo({ userId })
    if (code === 1) {
      dispatch(getUserInfo({ ...data, userId, username: data.email }))
    } else {
      alert(msg)
    }
  }

export const getArticleInfoAsync = articleId =>
  async dispatch => {
    const { code, msg, data } = await req.getArticleInfo({ articleId })
    if (code === 1) {
      dispatch(getArticleInfo({ ...data, articleId }))
    } else {
      alert(msg)
    }
  }

export const getArticleListAsync = () =>
  async dispatch => {
    const { code, msg, data } = await req.getArticleList()
    if (code === 1) {
      dispatch(loadArticleList(data))
    } else {
      alert(msg)
    }
  }

export const releaseArticleAsync = ({ title, content, userId }) =>
  async dispatch => {

    // eslint-disable-next-line no-unused-vars
    const { code, msg, data } = await req.releaseArticle({ title, content, userId })
    if (code === 1) {
      // dispatch(loadArticleList(data))
      alert('发布成功')
    } else {
      alert(msg)
    }
  }