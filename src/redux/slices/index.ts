import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counter';
import taskReducer from './tasks/tasksSlice';

export default combineReducers({
    counter: CounterReducer,
    tasks: taskReducer,
});
