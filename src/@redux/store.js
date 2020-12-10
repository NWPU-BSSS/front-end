import { createStore, applyMiddleware, combineReducers } from 'redux'
import {  registerPage, UserState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  $BlogPageState,
  $HomePageState,
  $Language,
  $ReleaseBlogPageState,
  $UserInfoState,
  $UserState,
  $GlobalState
} from './reducers'

const store = createStore(
  combineReducers({
    $Language,
    $UserState,
    $UserInfoState,
    $HomePageState,
    $ReleaseBlogPageState,
    $BlogPageState,
    $GlobalState
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store