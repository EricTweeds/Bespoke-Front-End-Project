import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
	fetchWeather,
	getWeather,
	receiveWeather,
	addLocation
} from '../actions'
import Footer from './Footer'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddLocation from '../containers/AddLocation'
import Weather from '../containers/Weather'

const App = () => (
  <div>
  	<AddLocation />
  	<Weather/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
