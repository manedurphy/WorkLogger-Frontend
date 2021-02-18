import { createSlice } from '@reduxjs/toolkit';
import { LogFormData } from '../../../components/forms/types';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setShowModal } from '../modals/modalsSlice';
import { filterTaskLogs, hideTaskForms, updateTaskLogs } from '../tasks/tasksSlice';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { deleteLogItem, getLog, updateLog } from './helpers';
import { initialLogState } from './initialState';
import { FilterLogAction, ILog, ILogState, SetLogAction, SetLogItemAction, SetShowLog, SetShowLogForm } from './types';

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
        filterLog: (state: ILogState, action: FilterLogAction) => {
            return {
                ...state,
                log: state.log.filter((logItem) => logItem.id !== action.payload),
                showLogForm: false,
            };
        },
    },
});

export const { setLog, setLogItem, setShowLog, setShowLogForm, filterLog } = logSlice.actions;
export const getLogState = (state: IGlobalState) => state.log;

export const handleUpdateLogItem = (id: number, taskId: number, formData: LogFormData): ThunkActionType => async (
    dispatch: ThunkDispatchType,
) => {
    try {
        const success: IAlert = await updateLog(id, formData);
        const log: ILog[] = await getLog(taskId);

        dispatch(addAlert(success));
        dispatch(setLog(log));
        dispatch(updateTaskLogs({ log, taskId }));
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export const handleDeleteLogItem = (id: number): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const success: IAlert = await deleteLogItem(id);

        dispatch(addAlert(success));
        dispatch(filterLog(id));
        dispatch(setShowModal(false));
        dispatch(filterTaskLogs(id));
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export const handleClickEdit = (logItem: ILog): ThunkActionType => (dispatch: ThunkDispatchType) => {
    dispatch(setLogItem(logItem));
    dispatch(hideTaskForms());
};

export default logSlice.reducer;
