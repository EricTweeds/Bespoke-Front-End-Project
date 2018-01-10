/*
 * action types
 */
import fetch from 'cross-fetch'

export const ADD_LOCATION = 'ADD_LOCATION'
export const GET_WEATHER = 'GET_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const SELECT_LOCATION = 'SELECT_LOCATION'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addLocation(location) {
	return { type: ADD_LOCATION, location }
}
export function getWeather(location) {
	return { type: GET_WEATHER, location }
}
let weatherId = 1;
//called after promise when data is received from api
export function receiveWeather(location, json) {
	return {
		type: RECEIVE_WEATHER,
		location,
		data: json.main,
		receivedAt: Date.now(),
		id:weatherId ++
	}
}
 let link
 let city
 let country

//requests data for the specified location from the openWeatherMap api
export function fetchWeather(location) {
	return function (dispatch) {
		//Notifies state that weather is being fetched
		dispatch(getWeather(location))
		city = location.city
		country = location.country
		link = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + 'id=524901&APPID=83e6bc5903c30ca626df2b647221e75f'//= 'https://api.darksky.net/forecast/961d00284ae951c12d1d465857950732/' + lat +',' + long
		return fetch(link, {})
			.then(
				response => response.json(),
				error => console.log('An Error Occured.', error)
			)
			.then(json => 
				//calls for the received data to be processed
				dispatch(receiveWeather(location, json))
			)
	}
}

//Checks to ensure the data for the location was received
function shouldFetchWeather(state, location) {
	const weather = state.weatherByLocation[location]
	if (!weather) {
		return true
	} else if (weather.isFetching) {
		return false
	} else {
		return false
	}
}
export function fetchWeatherIfNeeded(location) {
	return (dispatch, getState) => {
		if (shouldFetchWeather(getState(), location)) {
			return dispatch(fetchWeather(location))
		}
	}
}
