import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import Weather from './Weather'
import AddLocation from '../containers/AddLocation';
const listStyle = {
  listStyle: 'none'
};
export default class WeatherReports extends Component {
  render() {
    return (
      <ul>
        <div>
          <AddLocation
          onChange={this.handleChange}/>
          {!this.props.weather &&
            'loading...'}
          {this.props.weather &&
            <Weather key={this.props.weather.id} data={this.props.weather}/>
          }
        </div>
      </ul>
    )
  }
}


WeatherReports.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
      }).isRequired,      
    }).isRequired
  )
}