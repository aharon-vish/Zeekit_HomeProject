import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';

const rootReducer = combineReducers({
  movieList: MovieReducer
});

export default rootReducer;
