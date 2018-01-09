import React, { Component }  from 'react'
import { NavLink } from 'react-router-dom'

export default class Weather extends Component {
	render() {
        let link = '/' + this.props.filter
        return (
            <NavLink to={link}>
                { this.props.children }
            </NavLink>
        )
    }
}