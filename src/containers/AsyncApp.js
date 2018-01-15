import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    weatherRequestIfNeeded,
    addLocation
} from '../actions'
import Header from '../components/Header'
import Weather from '../components/Weather'
import AddLocation from './AddLocation'
import selectedLocation from '../reducers'
import { bindActionCreators } from 'redux';

import {
    makeSelectedLocation,
    makeWeather,
    makeIsFetching,
    makeLastUpdated
} from '../selectors'


const listStyle = {
    listStyle: 'none'
};

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
    componentDidMount() {
        weatherRequestIfNeeded(this.props.selectedLocation)
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedLocation !== prevProps.selectedLocation) {
            weatherRequestIfNeeded(this.props.selectedLocation)
        }
    }
    
    handleChange(nextLocation) {
        addLocation(nextLocation)
        weatherRequestIfNeeded(nextLocation)
    }

    handleRefreshClick(e) {
        e.preventDefault()
        weatherRequestIfNeeded(this.props.selectedLocation)
    }

    render() {
        return (
            <div>
                <AddLocation onChange = {this.handleChange} />
                {this.props.isFetching && this.props.weather.length ===0 && <h2>Loading...</h2>}
                {!this.props.isFetching && this.props.weather.length ===0 && <h2>Empty</h2>}
                {this.props.weather && <Weather weather ={this.props.weather}/>}
            </div>
        )
    }
}

export const mapStateToProps = (state, props) => {
    return {
        selectedLocation: makeSelectedLocation()(state),
        weather: makeWeather()(state),
        isFetching: makeIsFetching()(state),
        lastUpdated: makeLastUpdated()(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        weatherRequestIfNeeded: bindActionCreators(weatherRequestIfNeeded, dispatch),
        addLocation: bindActionCreators(addLocation, dispatch)
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AsyncApp))