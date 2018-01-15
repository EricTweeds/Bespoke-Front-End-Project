import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncApp from './AsyncApp'
import Scheduler from './Scheduler'
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound'
import Switch from 'react-router-dom/Switch';
import { Provider } from 'react-redux'
import { fetchWeather, fetchWeatherIfNeeded, fetchEvents } from '../sagas'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(fetchWeather)
sagaMiddleware.run(fetchWeatherIfNeeded)
sagaMiddleware.run(fetchEvents) 

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component = {AsyncApp}/>
                            <Route path="/scheduler" component = {Scheduler}/>
                            <Route path="/weather" component = {AsyncApp}/>
                            <Route component = {PageNotFound}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App