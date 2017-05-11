import axios from 'axios';

const API_KEY = '9dd5b0a4afbf45385039e4a42eec8fb9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// we need to wire it up to redux
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
