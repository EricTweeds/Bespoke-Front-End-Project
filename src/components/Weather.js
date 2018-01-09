import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../containers/Link'

const container = {
	border: 'solid',
	padding: '10px',
	width: '200px',
	margin: '10px',
	display: 'inline-block'
}
const title = {
	horizontalAllign: 'center'
}

export default class Weather extends Component {
	render() {
		var list = []
		for(var i = 2; i < this.props.weather.length; i++) {
			if (!this.props.weather[i].isFetching && this.props.weather[i].items) {
				list.push(
				<Link filter={this.props.weather[i].location.city}>
					<div style = {container} key = {this.props.weather[i].id}>
						<h2>{this.props.weather[i].location.city}</h2>
						<p>
							Temperature: {Math.round(((this.props.weather[i].items.temp) - 273)*100)/100}&deg;C
						</p>
						<p>
							High: {Math.round(((this.props.weather[i].items.temp_max) - 273)*100)/100}&deg;C
						</p>
						<p>
							Low: {Math.round(((this.props.weather[i].items.temp_min) - 273)*100)/100}&deg;C
						</p>
					</div> 
				</Link>
				)
			}
		}
		return (
			<span>
				{ list }
			</span>
		)
	}
}