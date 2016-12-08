import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'
import configureStore from './store/configureStore'
import './styles/app.css' 

const store = configureStore()


render(
  <Provider store={store}>
    <AppContainer>
      <div className='app'>
        <App />
      </div>
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(
      <Provider store={store}>
        <AppContainer>
          <NextApp/>
        </AppContainer>
      </Provider>,
      document.getElementById('root')
    )
  })
}