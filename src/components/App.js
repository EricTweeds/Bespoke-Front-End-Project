import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
	fetchWeather,
	getWeather,
	receiveWeather,
	addLocation
} from '../actions'

import AddLocation from '../containers/AddLocation'

const App = () => (
  <div>
		<h1>Hello World</h1>
  </div>
)

export default App
