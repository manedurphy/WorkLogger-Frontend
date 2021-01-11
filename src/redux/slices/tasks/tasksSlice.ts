import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { getIncompleteTasks } from './helpers';
import { initialTaskState } from './initialState';
import { ITaskState, SetLoadingTasksAction, SetTasksAction } from './types';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialTaskState,
    reducers: {
        setIncompleteTasks: (state: ITaskState, action: SetTasksAction) => {
            return {
                ...state,
                incompletedTasks: action.payload,
                loading: false,
            };
        },
        setLoadingTasks: (state: ITaskState, action: SetLoadingTasksAction) => {
            return {
                ...state,
                loading: action.payload,
            };
        },
    },
});

export const { setIncompleteTasks, setLoadingTasks } = taskSlice.actions;

export const getTasksState = (state: IGlobalState): ITaskState => state.tasks;

export const handleGetIncompleteTasks = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        dispatch(setLoadingTasks(true));
        const tasks = await getIncompleteTasks();
        dispatch(setIncompleteTasks(tasks));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export default taskSlice.reducer;
