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
    const { weather } = this.props
    return (
      <div>
        <AddLocation
            onChange={this.handleChange}/>
        <ul>
          <div>
            {!weather &&
              'loading...'}
            {weather &&
              <Weather key={weather.id} data={weather.items}/>
            }
          </div>
        </ul>
      </div>
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