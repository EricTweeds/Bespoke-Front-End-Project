import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncApp from './AsyncApp'
import Todo from './Todo'
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound'
import Switch from 'react-router-dom/Switch';
import configureStore from '../configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

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