import { createStore, applyMiddleware, combineReducers } from 'redux'
import { article, registerSuccess, showNav, userState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState,
    showNav,
    article,
    registerSuccess
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store