import {
  GET_ARTICLE_INFO,
  GET_ARTICLE_LIST, GET_TODAY_RECOMMEND, INPUT_MARKDOWN,
  LOGIN,
  LOGOUT,
  REGISTER, REGISTER_SUCCESS_FALSE, REGISTER_SUCCESS_TRUE, SET_ACCESS_TOKEN,
} from './action-types'

const initUserState = { userId: 1, username: '' }

export function AccessToken (state = '', action) {
  switch (action.type) {
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

// export function showNav (state = true, action) {
//   switch (action.type) {
//     case SHOW_NAV_MENU:
//       return true
//     case HIDE_NAV_MENU:
//       return false
//     default:
//       return state
//   }
// }

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
  // console.log(state, action)
  switch (action.type) {
    case REGISTER_SUCCESS_FALSE:
      return false
    case REGISTER_SUCCESS_TRUE:
      return true
    default:
      return state
  }
}

export function todayRecommend (state = {}, action) {
  switch (action.type) {
    case GET_TODAY_RECOMMEND:
      return { ...action.data }
    default:
      return state
  }
}

const content = `
# Markdown 在线编辑
## 二级标题

普通内容

### 三级标题

    代码块
  
### 代码高亮
~~~js
console.log('hello bsss')
~~~
`

const markdownEditorInit = {
  content
}

export function markdownEditor (state = markdownEditorInit, action) {
  switch (action.type) {
    case INPUT_MARKDOWN:
      return { content: action.data }
    default:
      return state
  }
}

