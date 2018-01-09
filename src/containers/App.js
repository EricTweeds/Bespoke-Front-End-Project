import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncApp from './AsyncApp'
import Todo from './Todo'
import Header from '../components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component = {Header}/>
                <Route path="/todo" component = {Todo}/>
                <Route path="/weather" component = {AsyncApp}/>
            </div>
        )
    }
}

export default App