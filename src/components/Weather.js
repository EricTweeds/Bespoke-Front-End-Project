import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weather extends Component {
	render() {
		var list = []
		for(var i = 2; i < this.props.weather.length; i++) {
			if (!this.props.weather[i].isFetching && this.props.weather[i].items) {
				list.push(<h2 key = {this.props.weather[i].id}>
					The temperature is {Math.round(((this.props.weather[i].items.temp) - 273)*100)/100}&deg;C in {this.props.weather[i].location.city}
				</h2> )
			}
		}
		return (
			<div>
				{list}
			</div>
		)
	}
}