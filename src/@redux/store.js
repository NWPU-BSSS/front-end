import { createStore, applyMiddleware, combineReducers } from 'redux'
import { article, markdownEditor, registerSuccess, userState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState,
    article,
    registerSuccess,
    markdownEditor
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store