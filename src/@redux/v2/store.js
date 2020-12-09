import { createStore, applyMiddleware, combineReducers } from 'redux'
import { $BlogPageState, $Language, $UserInfoState, $UserState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    $UserState,
    $UserInfoState,
    $BlogPageState,
    $Language
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store