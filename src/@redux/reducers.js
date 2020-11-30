import {
  EDIT_TAG, EDIT_TITLE,
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
    default:
      return state
  }
}

export function BlogList (state = {}, action) {
  switch (action.type) {
    case GET_BLOG_INFO:
      return { ...state, blogInfo: action.data }
    case GET_BLOG_LIST:
      return { ...state, blogList: action.data }
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
# Markdown Online Editor
## Subtitle

common content

### Little title

    Code Block
  
### Code Syntax Highlight
~~~js
console.log('hello bsss')
~~~
`

const markdownEditorInit = {
  content,
  tags: { tagA: 'TagA', tagB: 'TagB', tagC: 'TagC' },
  title: ''
}

export function MarkdownEditor (state = markdownEditorInit, action) {
  switch (action.type) {
    case INPUT_MARKDOWN:
      return { ...state, content: action.data }
    case EDIT_TAG:
      return { ...state, tags: action.data }
    case EDIT_TITLE:
      return { ...state, title: action.data }
    default:
      return state
  }
}

