import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AccessToken, BlogList, MarkdownEditor, registerPage, UserState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { $Language } from './v2/reducers'

const store = createStore(
  combineReducers({
    UserState,
    BlogList,
    MarkdownEditor,
    $Language,
    registerPage,
    AccessToken
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store