import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AccessToken, article, Language, MarkdownEditor, registerPage, registerSuccess, userState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState,
    article,
    registerSuccess,
    MarkdownEditor,
    Language,
    registerPage,
    AccessToken
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store