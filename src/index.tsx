import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './Redux'
import Main from './Main'

import './Styles/styles.scss'
 
const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>, 
  document.getElementById('root')
)