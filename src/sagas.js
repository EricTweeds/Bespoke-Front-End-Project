import { call, put, take } from 'redux-saga/effects'
import {openWeatherMapAPI} from './services'

let weatherId = 1;
export function* fetchWeather() {
    while (true) {
        const location = yield take("WEATHER_FETCH_REQUEST");
        let city = location.payload.city
        let country = location.payload.country
        yield call(getWeather, city, country)
    }
}
function* getWeather(city, country) {
    try {
        const response = yield call(openWeatherMapAPI, city, country);
        yield put({type: "WEATHER_FETCH_SUCCEEDED", weather: response.main, location:{city:city, country:country}, receivedAt: Date.now(), id: weatherId++})
    } catch(e) {
        yield put({type: "WEATHER_FETCH_FAILED", message: e.message})
    }
}

export function* fetchWeatherIfNeeded() {
    while (true) {
        const location = yield take("WEATHER_FETCH_REQUEST_IF_NEEDED");
        return (dispatch, getState) => {
            if (shouldFetchWeather(getState(), location.payload)) {
                dispatch({type:"WEATHER_FETCH_REQUEST", payload:location.payload})
            } 
        }
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