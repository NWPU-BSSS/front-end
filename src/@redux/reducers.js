import {
  EDIT_TAG,
  GET_BLOG_INFO,
  GET_BLOG_LIST, GET_TODAY_RECOMMEND, GET_USER_INFO, INPUT_MARKDOWN,
  LOGIN,
  LOGOUT,
  REGISTER, REGISTER_SUCCESS_FALSE, REGISTER_SUCCESS_TRUE, SEND_VERIFY_EMAIL_SUCCESS, SET_ACCESS_TOKEN, USE_EN, USE_ZH,
} from './action-types'

import { en, zh } from '../@i18n'

const initUserState = { userId: -1, username: '' }

export function AccessToken (state = '', action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return action.data
    default:
      return state
  }
}

export function Language (state = en, action) {
  switch (action.type) {
    case USE_EN:
      return en
    case USE_ZH:
      return zh
    default:
      return state
  }
}

export function userState (state = initUserState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.data }
    case LOGOUT:
      return initUserState
    case REGISTER:
      return { ...state, ...action.data }
    case GET_USER_INFO:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export function BlogList (state = {}, action) {
  switch (action.type) {
    case GET_BLOG_INFO:
      return {...state, blogInfo: action.data}
    case GET_BLOG_LIST:
      return { ...state, blogList: action.data}
    default:
      return state
  }
}

export function registerPage (state = {}, action) {
  switch (action.type) {
    case SEND_VERIFY_EMAIL_SUCCESS:
      return { ...state, disableSendCodeButton: true }
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


### 表格测试

| 111 | 222 |
| --- | --- |
| A | B |
`

const markdownEditorInit = {
  content,
  tags: { tagA: 'TagA', tagB: 'TagB', tagC: 'TagC' }
}

export function MarkdownEditor (state = markdownEditorInit, action) {
  switch (action.type) {
    case INPUT_MARKDOWN:
      return { ...state, content: action.data }
    case EDIT_TAG:
      return { ...state, tags: action.data }
    default:
      return state
  }
}

