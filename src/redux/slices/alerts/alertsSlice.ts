import { createSlice } from '@reduxjs/toolkit';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { AlertAction, AlertStateType, IAlert } from './types';

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: [],
    reducers: {
        add: (state: AlertStateType, action: AlertAction) => {
            state.push(action.payload);
        },
        remove: (state: AlertStateType) => {
            state.shift();
        },
    },
});

const { add } = alertsSlice.actions;

export const handleAlert = (alert: IAlert): ThunkActionType => (dispatch: ThunkDispatchType) => {
    dispatch(add(alert));
    // setTimeout(() => {
    //     dispatch(remove());
    // }, 3000);
};

export default alertsSlice.reducer;
