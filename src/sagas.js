import { call, put, takeEvery } from 'redux-saga/effects'

let weatherId = 1;
function* fetchWeather(action) {
    try {
        let city = action.city
        let country = action.country
        const weather = yield call('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + 'id=524901&APPID=83e6bc5903c30ca626df2b647221e75f')
        yield put({type: "WEATHER_FETCH_SUCCEEDED", weather: weather, location:{city:action.city, country:action.country}, receivedAt: Date.now(), id: weatherId++})
    } catch (e) {
        yield put({type: "WEATHER_FETCH_FAILED", message: e.message})
    }
}


function* mySaga() {
    yield takeEvery("WEATHER_FETCH_REQUEST". fetchWeather)
}

export default mySaga