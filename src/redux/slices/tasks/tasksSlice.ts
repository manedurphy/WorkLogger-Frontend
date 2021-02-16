import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setShowModal } from '../modals/modalsSlice';
import { TaskFormData } from '../../../components/forms/types';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { completeTask, createTask, deleteTask, getCompleteTasks, getIncompleteTasks, updateTask } from './helpers';
import { initialTaskState } from './initialState';
import {
    ITask,
    ITaskState,
    SetCurrentTaskAction,
    SetEditTaskAction,
    SetLoadingTasksAction,
    SetShowCreateTaskForm,
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
                showCreateTaskForm: false,
                showCompleted: false,
            };
        },
        setCompleteTasks: (state: ITaskState, action: SetTasksAction) => {
            return {
                ...state,
                completeTasks: action.payload,
                loading: false,
                showCreateTaskForm: false,
                showCompleted: true,
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
                edit: true,
            };
        },
        setEditTask: (state: ITaskState, action: SetEditTaskAction) => {
            return {
                ...state,
                edit: action.payload,
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
    setCompleteTasks,
    setLoadingTasks,
    setCurrentTask,
    setEditTask,
    setShowCreateNewTaskForm,
} = taskSlice.actions;

export const getTasksState = (state: IGlobalState): ITaskState => state.tasks;
export const getIncompleteTasksState = (state: IGlobalState): ITask[] => state.tasks.incompletedTasks;

export const handleGetIncompleteTasks = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        dispatch(setLoadingTasks(true));
        const tasks: ITask[] = await getIncompleteTasks();
        dispatch(setIncompleteTasks(tasks));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleGetCompleteTasks = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        dispatch(setLoadingTasks(true));
        const tasks: ITask[] = await getCompleteTasks();
        dispatch(setCompleteTasks(tasks));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleSubmitNewTask = (formData: TaskFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
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
        const tasks: ITask[] = await getIncompleteTasks();

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
        const tasks: ITask[] = await getIncompleteTasks();

        dispatch(setIncompleteTasks(tasks));
        dispatch(addAlert(success));
        dispatch(setShowModal(false));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleUpdateTask = (id: number, formData: TaskFormData): ThunkActionType => async (
    dispatch: ThunkDispatchType,
) => {
    try {
        const success: IAlert = await updateTask(id, formData);
        const tasks: ITask[] = await getIncompleteTasks();

        dispatch(setIncompleteTasks(tasks));
        dispatch(addAlert(success));
        dispatch(setEditTask(false));
    } catch (error) {
        dispatch(addAlert({ message: error.message, type: AlertConstants.Error }));
    }
};

export default taskSlice.reducer;
