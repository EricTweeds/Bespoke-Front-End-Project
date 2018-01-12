/*
 * action types
 */
import fetch from 'cross-fetch'

export const ADD_LOCATION = 'ADD_LOCATION'
export const GET_WEATHER = 'GET_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const SELECT_LOCATION = 'SELECT_LOCATION'
export const WEATHER_FETCH_SUCCEEDED = 'WEATHER_FETCH_SUCCEEDED'
export const WEATHER_FETCH_REQUEST = 'WEATHER_FETCH_REQUEST'
export const WEATHER_FETCH_REQUEST_IF_NEEDED = 'WEATHER_FETCH_REQUEST_IF_NEEDED'
export const WEATHER_FETCH_FAILED = 'WEATHER_FETCH_FAILED'
/*
 * action creators
 */

export const addLocation = (location) => ({
	type: ADD_LOCATION,
	location
})

export const weatherRequest = (location) => ({
	type:WEATHER_FETCH_REQUEST,
	location
})

export const weatherRequestIfNeeded = (location) => ({
	type:WEATHER_FETCH_REQUEST_IF_NEEDED,
	location
})

export const weatherRequestSuccess = (response) => ({
	type:WEATHER_FETCH_SUCCEEDED,
	response
})

export const weatherRequestFailed = (message) => ({
	type:WEATHER_FETCH_FAILED,
	message
})
/*
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
export function fetchWeatherA(location) {
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
export function fetchWeatherIfNeededA(location) {
	return (dispatch, getState) => {
		if (shouldFetchWeather(getState(), location)) {
			return dispatch(fetchWeather(location))
		}
	}
}
*/