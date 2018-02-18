import { ROOT_URL } from '../constants/constant';
import axios from 'axios';
import { FETCH_WEATHER } from '../constants/type_constant';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
