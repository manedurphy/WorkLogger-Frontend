import { createSlice } from '@reduxjs/toolkit';
import { LogFormData } from '../../../components/forms/types';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { getLog, updateLog } from './helpers';
import { initialLogState } from './initialState';
import { ILog, ILogState, SetLogAction, SetLogItemAction, SetShowLog, SetShowLogForm } from './types';

const logSlice = createSlice({
    name: 'log',
    initialState: initialLogState,
    reducers: {
        setLog: (state: ILogState, action: SetLogAction) => {
            return {
                ...state,
                log: action.payload,
                showLog: true,
                showLogForm: false,
            };
        },
        setLogItem: (state: ILogState, action: SetLogItemAction) => {
            return {
                ...state,
                currentLogItem: action.payload,
                showLogForm: true,
            };
        },
        setShowLog: (state: ILogState, action: SetShowLog) => {
            return {
                ...state,
                showLog: action.payload,
            };
        },
        setShowLogForm: (state: ILogState, action: SetShowLogForm) => {
            return {
                ...state,
                showLogForm: action.payload,
            };
        },
    },
});

export const { setLog, setLogItem, setShowLog, setShowLogForm } = logSlice.actions;
export const getLogState = (state: IGlobalState) => state.log;

export const handleUpdateLogItem = (id: number, taskId: number, formData: LogFormData): ThunkActionType => async (
    dispatch: ThunkDispatchType,
) => {
    try {
        const success: IAlert = await updateLog(id, formData);
        const log: ILog[] = await getLog(taskId);

        dispatch(addAlert(success));
        dispatch(setLog(log));
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export default logSlice.reducer;
