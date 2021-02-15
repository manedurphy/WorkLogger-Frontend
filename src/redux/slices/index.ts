import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counter';
import taskReducer from './tasks/tasksSlice';
import logReducer from './log/logSlice';
import userReducer from './users/usersSlice';
import alertsReducer from './alerts/alertsSlice';
import authReducer from './auth/authSlice';
import modalReducer from './modals/modalsSlice';
import drawerReducer from './drawer/drawerSlice';

export default combineReducers({
    counter: CounterReducer,
    auth: authReducer,
    alerts: alertsReducer,
    tasks: taskReducer,
    log: logReducer,
    user: userReducer,
    modal: modalReducer,
    drawer: drawerReducer,
});
