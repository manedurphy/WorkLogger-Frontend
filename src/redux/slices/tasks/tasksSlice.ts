import { createSlice } from '@reduxjs/toolkit';
import { initialTaskState, ITaskState, SetLoadingTasksAction, SetTasksAction } from './types';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialTaskState,
    reducers: {
        setIncompleteTasks: (state: ITaskState, action: SetTasksAction) => {
            return {
                ...state,
                currentTasks: action.payload,
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

export const { setIncompleteTasks } = taskSlice.actions;

export default taskSlice.reducer;
