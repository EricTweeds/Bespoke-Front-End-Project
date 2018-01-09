import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AsyncApp from './containers/AsyncApp'
import Todo from './containers/Todo'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = configureStore()

render((
      <Provider store={store}>
        <Router>
          <Route path="/" component = {AsyncApp}>
            <Route path="todo" component = {Todo}/>
            <Route path="home" component = {AsyncApp}/>
          </Route>
        </Router>
      </Provider>
    ), document.getElementById('root'))