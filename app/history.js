import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import { browserHistory, hashHistory } from 'react-router'

const historyType = process.env.NODE_ENV === 'production' ? browserHistory : hashHistory
export default syncHistoryWithStore(historyType, store, {
  selectLocationState: state => state.get('routing'),
})
