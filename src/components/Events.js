import React, { Component } from 'react'


export default class Events extends Component {
    render() {
        var list = []
        for(let i = 1; i < this.props.events.length; i++) {
            list.push(
                <h1>{this.props.events[i].name}</h1>
            )
        }

        return (
            <span>{ list }</span>
        )
    }
}