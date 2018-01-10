import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncApp from './AsyncApp'
import Todo from './Todo'
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound'
import Switch from 'react-router-dom/Switch';
import { Provider } from 'react-redux'
import mySaga from '../sagas'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component = {AsyncApp}/>
                            <Route path="/todo" component = {Todo}/>
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