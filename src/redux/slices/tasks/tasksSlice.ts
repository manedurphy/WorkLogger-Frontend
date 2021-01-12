import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setShowModal } from '../modals/modalsSlice';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { completeTask, deleteTask, getIncompleteTasks } from './helpers';
import { initialTaskState } from './initialState';
import {
    ITask,
    ITaskState,
    SetCurrentTaskAction,
    SetEditTaskAction,
    SetLoadingTasksAction,
    SetTasksAction,
} from './types';

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
        setCurrentTask: (state: ITaskState, action: SetCurrentTaskAction) => {
            return {
                ...state,
                edit: true,
                currentTask: action.payload,
            };
        },
        setEditTask: (state: ITaskState, action: SetEditTaskAction) => {
            return {
                ...state,
                edit: action.payload,
            };
        },
    },
});

export const { setIncompleteTasks, setLoadingTasks, setCurrentTask } = taskSlice.actions;

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

export const findAndSetCurrentTask = (id: number, tasks: ITask[]): ThunkActionType => (dispatch: ThunkDispatchType) => {
    try {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            dispatch(setCurrentTask(task));
        } else {
            throw new Error('Task not found.');
        }
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export const handleCompleteTask = (id: number): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const success: IAlert = await completeTask(id);
        const tasks = await getIncompleteTasks();

        dispatch(setIncompleteTasks(tasks));
        dispatch(addAlert(success));
        dispatch(setShowModal(false));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleDeleteTask = (id: number): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const success: IAlert = await deleteTask(id);
        const tasks = await getIncompleteTasks();

        dispatch(setIncompleteTasks(tasks));
        dispatch(addAlert(success));
        dispatch(setShowModal(false));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export default taskSlice.reducer;
