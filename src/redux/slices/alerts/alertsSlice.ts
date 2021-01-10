import { createSlice } from '@reduxjs/toolkit';
import { AlertAction, AlertStateType } from './types';

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: [],
    reducers: {
        add: (state: AlertStateType, action: AlertAction) => {
            state.push(action.payload);
        },
    },
});

export const { add } = alertsSlice.actions;

export default alertsSlice.reducer;
