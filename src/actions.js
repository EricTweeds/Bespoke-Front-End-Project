/*
 * action types
 */
import fetch from 'cross-fetch'
import weather from './reducers/weather';

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
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

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function addLocation(location) {
	return { type: ADD_LOCATION, location }
}

export function getWeather(location) {
	return { type: GET_WEATHER, location }
}
let weatherId = 100;
export function receiveWeather(location, json) {
	console.log(json)
	return {
		type: RECEIVE_WEATHER,
		location,
		weather: json.main,
		receivedAt: Date.now(),
		id:weatherId ++
	}
}
 let link
 let city
 let country
export function fetchWeather(location) {
	return function (dispatch) {
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
				dispatch(receiveWeather(location, json))
			)
	}
}
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
