import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counter';

export default combineReducers({
    counter: CounterReducer,
});
