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
  $GlobalState,
  $BLoggerPageState
} from './reducers'

const store = createStore(
  combineReducers({
    $Language,
    $GlobalState,
    $UserState,
    $UserInfoState,
    $HomePageState,
    $ReleaseBlogPageState,
    $BlogPageState,
    $BLoggerPageState
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store