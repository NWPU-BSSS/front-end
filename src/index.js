import 'antd/dist/antd.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './@redux/store'
import PropTypes from 'prop-types'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
