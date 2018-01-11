import fetch from 'cross-fetch'

function parseJSON(response) {
    return response.json();
}


export const openWeatherMapAPI = (city, country) => {
    let link = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + 'id=524901&APPID=83e6bc5903c30ca626df2b647221e75f'
    return fetch(link, {})
            .then(parseJSON);
}