import { call, put, take } from 'redux-saga/effects'
import {openWeatherMapAPI, schedulerAPI } from './services'

import {
    WEATHER_FETCH_REQUEST,
    WEATHER_FETCH_REQUEST_IF_NEEDED,
    WEATHER_FETCH_SUCCEEDED,
    WEATHER_FETCH_FAILED,
    EVENT_FETCH_REQUEST,
    weatherRequestSuccess,
    weatherRequestFailed,  
    eventsRequestSuccess,
    eventsRequestFailed
} from './actions'

let weatherId = 1;
export function* fetchWeather() {
    while (true) {
        const location = yield take(WEATHER_FETCH_REQUEST);
        let city = location.location.city
        let country = location.location.country
        yield call(getWeather, city, country)
    }
}
function* getWeather(city, country) {
    try {
        const response = yield call(openWeatherMapAPI, city, country);
        yield put(weatherRequestSuccess({weather: response.main, location:{city, country}, receivedAt: Date.now(), id: weatherId++}))
    } catch(e) {
        yield put(weatherRequestFailed(e.message))
    }
}

export function* fetchWeatherIfNeeded() {
    while (true) {
        const location = yield take(WEATHER_FETCH_REQUEST_IF_NEEDED);
        return (dispatch, getState) => {
            if (shouldFetchWeather(getState(), location.payload)) {
                dispatch({type:WEATHER_FETCH_REQUEST, payload:location.payload})
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

export function* fetchEvents() {
    while (true) {
        const response = yield take(EVENT_FETCH_REQUEST)
        yield call(getEvents)
    }
}

function* getEvents() {
    try {
        const response = yield call(schedulerAPI);
        yield put(eventsRequestSuccess(response))
    } catch(e) {
        yield put(eventsRequestFailed(e.message))
    }
}