import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weather extends Component {
	render() {
		return (
			<li>
				{'temperature is ' + Math.round((this.props.weather.temp - 273)*100)/100 }&deg;C
			</li>
		)
	}
}