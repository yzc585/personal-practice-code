// import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux-immutable'
import userInfo from './userInfo'
import { routerReducer } from 'react-router-redux'
export default combineReducers({
  userInfo,
  routing: routerReducer,
})
