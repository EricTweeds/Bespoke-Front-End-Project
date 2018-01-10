//Header bar at the top of the page for navigation

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../containers/Link'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <ul className="Header-list">
                <li className="Header-list-element"><Link filter='weather'><h3 className="Header-text">Weather</h3></Link></li>
                <li className="Header-list-element"><Link filter='todo'><h3 className="Header-text">ToDo</h3></Link></li>
                <li className="Header-list-element"><a href='https://github.com/EricTweeds/Bespoke-Front-End-Project' className="Header-text">Repo</a></li>
            </ul>
        )
    }

}
