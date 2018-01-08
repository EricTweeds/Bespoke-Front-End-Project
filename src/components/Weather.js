import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weather extends Component {
	render() {
		const { data } = this.props
		return (
			<li>
				{data.base}
			</li>
		)
	}
}