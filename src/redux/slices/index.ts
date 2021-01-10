import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counter';
import taskReducer from './tasks/tasksSlice';
import userReducer from './users/usersSlice';

export default combineReducers({
    counter: CounterReducer,
    tasks: taskReducer,
    user: userReducer,
});
