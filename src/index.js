import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import todoApp from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root'

let store = createStore(todoApp)

render(
	<Root />,
	document.getElementById('root')
)
