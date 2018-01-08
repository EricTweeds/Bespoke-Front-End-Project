import React from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import Weather from './Weather'
const listStyle = {
  listStyle: 'none'
};
const WeatherReports = ({ locations }, {weather}) => (
  <ul style={listStyle}>
    {locations.map(location => (
        <Location key={location.id} {...location}/>
    ))}
    <div>
      {!weather &&
        'loading...'}
      {weather &&
        <Weather key={weather.id} {...weather}/>
      }
    </div>
  </ul>
)

WeatherReports.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      coords: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        long: PropTypes.string.isRequired
      }).isRequired,      
    }).isRequired
  )
}
export default WeatherReports