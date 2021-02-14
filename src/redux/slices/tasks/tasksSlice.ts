import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setShowModal } from '../modals/modalsSlice';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { completeTask, createTask, deleteTask, getIncompleteTasks } from './helpers';
import { initialTaskState } from './initialState';
import {
    ITask,
    ITaskState,
    SetCurrentTaskAction,
    SetEditTaskAction,
    SetLoadingTasksAction,
    SetShowCreateTaskForm,
    SetShowLogAction,
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
                currentTask: action.payload,
            };
        },
        setEditTask: (state: ITaskState, action: SetEditTaskAction) => {
            return {
                ...state,
                edit: action.payload,
            };
        },
        setShowLog: (state: ITaskState, action: SetShowLogAction) => {
            return {
                ...state,
                showLog: action.payload,
            };
        },
        setShowCreateNewTaskForm: (state: ITaskState, action: SetShowCreateTaskForm) => {
            return {
                ...state,
                showCreateTaskForm: action.payload,
            };
        },
    },
});

export const {
    setIncompleteTasks,
    setLoadingTasks,
    setCurrentTask,
    setShowLog,
    setEditTask,
    setShowCreateNewTaskForm,
} = taskSlice.actions;

export const getTasksState = (state: IGlobalState): ITaskState => state.tasks;
export const getIncompleteTasksState = (state: IGlobalState): ITask[] => state.tasks.incompletedTasks;

export const handleGetIncompleteTasks = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        dispatch(setLoadingTasks(true));
        const tasks = await getIncompleteTasks();
        dispatch(setIncompleteTasks(tasks));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const setCurrentAndShowLog = (id: number, tasks: ITask[]): ThunkActionType => (dispatch: ThunkDispatchType) => {
    try {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            dispatch(setCurrentTask(task));
            dispatch(setShowLog(true));
        } else {
            throw new Error('Task not found.');
        }
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export const setCurrentAndEdit = (id: number, tasks: ITask[]): ThunkActionType => (dispatch: ThunkDispatchType) => {
    try {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            dispatch(setCurrentTask(task));
            dispatch(setEditTask(true));
        } else {
            throw new Error('Task not found.');
        }
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export const handleSubmitNewTask = (formData: any): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const success: IAlert = await createTask(formData);
        const tasks: ITask[] = await getIncompleteTasks();

        dispatch(setIncompleteTasks(tasks));
        dispatch(addAlert(success));
    } catch (error) {
        console.log(error.response);
        dispatch(addAlert({ message: error.response.data, type: AlertConstants.Error }));
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
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
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
