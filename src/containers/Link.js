import React, { Component }  from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    textDecoration: 'none'
}

export default class Weather extends Component {
	render() {
        let link = '/' + this.props.filter
        return (
            <NavLink to={link} style={style}>
                { this.props.children }
            </NavLink>
        )
    }
}