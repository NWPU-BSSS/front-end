import {
  LOGIN,
  LOGOUT,
  REGISTER,
  GET_USER_INFO,
  GET_ARTICLE_INFO,
  GET_ARTICLE_LIST,
  RELEASE_ARTICLE
} from './action-types'

export const login = (username, email, userId) => ({
  type: LOGIN,
  data:{ username, email, userId}
})

export const loadUserInfo = (username, email, userId) => ({
  type: GET_USER_INFO,
  data: { username, email, userId }
})
// export const register = (username, password, email) => ({ type: REGISTER, body: { username, password, email } })
export const logout = () => ({ type: LOGOUT })
// export const getUserInfo = userId => ({ type: GET_USER_INFO, query: { userId } })

export const loadArticleInfo = (articleId, title, content) => ({
  type: GET_ARTICLE_INFO,
  data: { articleId, title, content }
})
export const loadArticleList = list => ({ type: GET_ARTICLE_LIST, data: list })
// export const releaseArticle = (userId, content, title) => ({ type: RELEASE_ARTICLE, body: { userId, content, title } })

export const loginAsync = (username, password, email) =>
  dispatch => {
    setTimeout(() => {
      dispatch(loadUserInfo(username, email, 1))
    }, 1000)
  }

export const registerAsync = (username, password, email) =>
  dispatch => {
    setTimeout(() => {
      dispatch(loadUserInfo(username, email, 1))
    }, 1000)
  }

export const getUserInfoAsync = userId =>
  dispatch => {
    setTimeout(() => {
      dispatch(loadUserInfo('chyoic', '1789446861@qq.com', 1))
    }, 1000)
  }

export const getArticleInfoAsync = articleId =>
  dispatch => {
    setTimeout(() => {
      dispatch(loadArticleInfo())
    }, 1000)
  }

export const getArticleListAsync = () =>
  dispatch => {
    setTimeout(() => {
      dispatch(loadArticleList([
        {articleId: 1, title: '文章1'},
        {articleId: 2, title: '文章2'},
        {articleId: 3, title: '文章3'}
      ]))
    }, 1000)
  }