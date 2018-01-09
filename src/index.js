import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './containers/App'

const store = configureStore()

render((
      <Provider store={store}>
	  	<Router>
			<App/>
		</Router>
      </Provider>
	), document.getElementById('root'))
	