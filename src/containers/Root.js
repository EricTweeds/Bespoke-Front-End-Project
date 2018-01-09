import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsyncApp from '../containers/AsyncApp'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component = {AsyncApp} />
        </Router>
      </Provider>
    )
  }
}

