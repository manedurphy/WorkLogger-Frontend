import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counter';
import taskReducer from './tasks/tasksSlice';
import userReducer from './users/usersSlice';
import alertsReducer from './alerts/alertsSlice';

export default combineReducers({
    counter: CounterReducer,
    alerts: alertsReducer,
    tasks: taskReducer,
    user: userReducer,
});
