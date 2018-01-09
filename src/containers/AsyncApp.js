import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getWeather,
  receiveWeather,
  fetchWeather,
  addLocation,
  fetchWeatherIfNeeded,
  selectedLocation
} from '../actions'

import Weather from '../components/Weather'
import WeatherReports from '../components/WeatherReports'
import AddLocation from './AddLocation';

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
        const { dispatch, selectedLocation } = this.props
        dispatch(fetchWeatherIfNeeded(selectedLocation))
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedLocation !== prevProps.selectedLocation) {
            const { dispatch, selectedLocation } = this.props
            dispatch(fetchWeatherIfNeeded(selectedLocation))
        }
    }
    
    handleChange(nextLocation) {
        this.props.dispatch(AddLocation(nextLocation))
        this.props.dispatch(fetchWeatherIfNeeded(nextLocation))
    }

    handleRefreshClick(e) {
        e.preventDefault()
        const {dispatch, selectedLocation} = this.props
        dispatch(fetchWeatherIfNeeded(selectedLocation))
    }

    render() {
        const { selectedLocation, weather, isFetching, lastUpdated, locations, weatherByLocation } = this.props
        return (
            <div>
            <AddLocation onChange={this.handleChange} />
            <ul style={listStyle}>
                {isFetching && weather.length ===0 && <h2>Loading...</h2>}
                {!isFetching && weather.length ===0 && <h2>Empty</h2>}
                {weather && <Weather weatherByLocation ={weatherByLocation} locations = {locations}/>}
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedLocation, weatherByLocation, locations } = state
    const {
        isFetching,
        lastUpdated,
        items: weather 
    } = weatherByLocation[selectedLocation] || {
        isFetching: true,
        items: []
    }
    return {
        selectedLocation,
        weather,
        isFetching,
        lastUpdated,
        locations
    }
}

export default connect(mapStateToProps)(AsyncApp)