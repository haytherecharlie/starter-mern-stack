/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Index | React Application
 ******************************************/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './lib/Redux/Redux'
import Routes from './lib/Routes/Routes'
import './helpers/Notification/Notification'
import './assets/styles/base.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
