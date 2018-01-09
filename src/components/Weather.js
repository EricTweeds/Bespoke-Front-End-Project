import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weather extends Component {
	render() {
		return (
			<ul>
				{this.props.locations.map((location, i) =>
				<li key = {i}>
					{'temperature is ' + Math.round(((273) - 273)*100)/100 }&deg;C in {location.location.city}
				</li> )}
			</ul>
		)
	}
}