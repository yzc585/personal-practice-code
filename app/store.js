import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
