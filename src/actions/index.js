import axios from 'axios';
const ROOT_URL = 'http://www.omdbapi.com/?';

export const FETCH_MOVIE = 'FETCH_MOVIEW';

export function fetchWeather(term) {
  const url = `${ROOT_URL}&s=${term}`;
  console.log(term,url);
  const request = axios.get(url);
console.log(request);
  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
