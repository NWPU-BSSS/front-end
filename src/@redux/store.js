import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AccessToken, BlogList, Language, MarkdownEditor, registerPage, UserState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    UserState,
    BlogList,
    MarkdownEditor,
    Language,
    registerPage,
    AccessToken
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store