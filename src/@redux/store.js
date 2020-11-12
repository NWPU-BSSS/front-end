import { createStore, applyMiddleware, combineReducers } from 'redux'
import { userState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store