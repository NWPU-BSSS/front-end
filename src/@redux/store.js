import { createStore, applyMiddleware, combineReducers } from 'redux'
import { showNav, userState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState,
    showNav
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store