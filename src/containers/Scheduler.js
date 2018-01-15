import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { eventsRequest } from '../actions';
import Events from '../components/Events'
import { makeEvents } from '../selectors'

class Scheduler extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <h1>Events</h1> 
        {this.props.events && <Events events = {this.props.events}/>}
        <button onClick={this.handleClick}>Get Events</button>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => {
  return {
    events: makeEvents()(state)
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: bindActionCreators(eventsRequest, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Scheduler))