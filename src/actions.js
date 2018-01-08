/*
 * action types
 */
import fetch from 'cross-fetch'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ADD_LOCATION = 'ADD_LOCATION'
export const GET_WEATHER = 'GET_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
/*
 * other constants
 */

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

export function addLocation(coords) {
	return { type: ADD_LOCATION, coords }
}

export function getWeather(coords) {
	return { type: GET_WEATHER, coords }
}
let weatherId = 100;
export function receiveWeather(coords, json) {
	console.log(json)
	return {
		type: RECEIVE_WEATHER,
		coords,
		data: json,
		receivedAt: Date.now(),
		id:weatherId ++
	}
}
 let link
 let lat
 let long
export function fetchWeather(coords) {
	return function (dispatch) {
		dispatch(getWeather(coords))
		lat = coords.lat
		long = coords.long
		link = 'http://api.openweathermap.org/data/2.5/weather?q=' + lat + ',' + long + 'id=524901&APPID=83e6bc5903c30ca626df2b647221e75f'//= 'https://api.darksky.net/forecast/961d00284ae951c12d1d465857950732/' + lat +',' + long
		return fetch(link, {})
			.then(
				response => response.json(),
				error => console.log('An Error Occured.', error)
			)
			.then(json => 
				dispatch(receiveWeather(coords, json))
			)
	}
}
