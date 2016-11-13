import 'normalize.css'
import './styles/common.styl'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.jsx'

ReactDOM.render(
  <App />,
  document.getElementById('container')
)

// hot-reload for App
if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    /* eslint-disable global-require */
    const NewApp = require('./containers/App.jsx').default
    ReactDOM.render(
      <NewApp />,
      document.getElementById('container')
    )
  })
}
