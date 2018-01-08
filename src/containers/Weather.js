import { connect } from 'react-redux'
import WeatherReports from '../components/WeatherReports'

const mapStateToProps = state => {
  return {
    locations: state.locations,
    weather: state.weather
   }
}


const Weather = connect(
  mapStateToProps,
)(WeatherReports)

export default Weather