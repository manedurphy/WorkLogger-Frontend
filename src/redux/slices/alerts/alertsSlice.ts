import { createSlice } from '@reduxjs/toolkit';
import { AlertAction, AlertStateType } from './types';

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: [],
    reducers: {
        addAlert: (state: AlertStateType, action: AlertAction) => {
            state.push(action.payload);
        },
    },
});

export const { addAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
