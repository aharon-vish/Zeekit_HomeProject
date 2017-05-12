import axios from 'axios';
import { FETCH_MOVIE } from '../types';
const ROOT_URL = 'http://www.omdbapi.com/?';

export function fetchMovie(search,filter,value) {
    let url;
    if(filter && value){
         url = ROOT_URL+`s=${search}&${filter}=${value}`;
    }else {
         url = ROOT_URL+'s='+search;
    }
    const request = axios.get(url);
    return {
        type: FETCH_MOVIE,
        payload: request
    };
}
