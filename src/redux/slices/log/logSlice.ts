import { createSlice } from '@reduxjs/toolkit';
import { LogFormData } from '../../../components/forms/types';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setShowModal } from '../modals/modalsSlice';
import { getIncompleteTasks } from '../tasks/helpers';
import { hideTaskForms, setIncompleteTasks } from '../tasks/tasksSlice';
import { ITask } from '../tasks/types';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { deleteLogItem, updateLog } from './helpers';
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
        const tasks: ITask[] = await getIncompleteTasks();
        const task = tasks.find((task) => task.id === taskId);

        dispatch(addAlert(success));
        dispatch(setIncompleteTasks(tasks));
        if (task) dispatch(setLog(task.Logs));
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export const handleDeleteLogItem = (id: number, taskId: number): ThunkActionType => async (
    dispatch: ThunkDispatchType,
) => {
    try {
        const success: IAlert = await deleteLogItem(id);
        const tasks: ITask[] = await getIncompleteTasks();
        const task = tasks.find((task) => task.id === taskId);

        dispatch(addAlert(success));
        dispatch(setIncompleteTasks(tasks));
        if (task) dispatch(setLog(task.Logs));
        dispatch(setShowModal(false));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleClickEdit = (logItem: ILog): ThunkActionType => (dispatch: ThunkDispatchType) => {
    dispatch(setLogItem(logItem));
    dispatch(hideTaskForms());
};

export default logSlice.reducer;
