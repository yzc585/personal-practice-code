import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import MainComponent from './MainComponent.jsx'
import store from '../store'
import history from '../history'

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={MainComponent} />
      </Router>
    </Provider>
  </AppContainer>
)
export default App
