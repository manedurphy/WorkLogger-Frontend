import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './tasks/tasksSlice';
import logReducer from './log/logSlice';
import userReducer from './users/usersSlice';
import alertsReducer from './alerts/alertsSlice';
import authReducer from './auth/authSlice';
import modalReducer from './modals/modalsSlice';
import drawerReducer from './drawer/drawerSlice';
import reportReducer from './report/reportSlice';

export default combineReducers({
    auth: authReducer,
    alerts: alertsReducer,
    tasks: taskReducer,
    log: logReducer,
    user: userReducer,
    modal: modalReducer,
    drawer: drawerReducer,
    report: reportReducer,
});
