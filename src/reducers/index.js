//A reducer is a function that returns a piece of applications state, there can be many different reducers to reuturn different pieces of the apps state.
import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
