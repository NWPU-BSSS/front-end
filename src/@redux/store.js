import { createStore, applyMiddleware, combineReducers } from 'redux'
import { article, Language, MarkdownEditor, registerSuccess, userState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState,
    article,
    registerSuccess,
    MarkdownEditor,
    Language
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store