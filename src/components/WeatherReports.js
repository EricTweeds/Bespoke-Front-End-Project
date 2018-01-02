import React from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
const listStyle = {
  listStyle: 'none'
};

const WeatherReports = ({ locations }) => (
  <ul style={listStyle}>
    {locations.map(location => (
      <Location key={location.id} {...location}/>
    ))}
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
)}

export default WeatherReports