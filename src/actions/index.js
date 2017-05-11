import axios from 'axios';
const ROOT_URL = 'http://www.omdbapi.com/?';

export const FETCH_MOVIE = 'FETCH_MOVIEW';

export function fetchMovie(term) {
  const url = `${ROOT_URL}&s=${term}`;
  const request = axios.get(url);
  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
