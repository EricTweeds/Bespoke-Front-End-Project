import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

//let store = createStore(todoApp)

render(
	<Root />,
	document.getElementById('root')
)