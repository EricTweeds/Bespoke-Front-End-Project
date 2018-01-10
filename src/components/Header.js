import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../containers/Link'

const listStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0'
}

const elementStyle = {
    display: 'inline'
}

const textStyle = {
    display: 'inline',
    padding: '8px',
    backgroundColor: '#ddd',
    marginLeft:'-8px',
    marginRight:'8px',
    textDecoration: 'none',
    color: 'black',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderWidth: '1px',
    fontSize: '20px',
    fontWeight: 'bold'

}
export default class Header extends Component {
    render() {
        return (
            <ul style = {listStyle}>
                <li style = {elementStyle}><Link filter='weather'><h3 style = {textStyle}>Weather</h3></Link></li>
                <li style = {elementStyle}><Link filter='todo'><h3 style = {textStyle}>ToDo</h3></Link></li>
                <li style = {elementStyle}><a href='https://github.com/EricTweeds/Bespoke-Front-End-Project' style = {textStyle}>Repo</a></li>
            </ul>
        )
    }

}