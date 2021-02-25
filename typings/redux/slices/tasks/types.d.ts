import { ILog } from '../log/types';
export interface ITask {
    id: number;
    name: string;
    projectNumber: number;
    hoursAvailableToWork: number;
    hoursWorked: number;
    hoursRemaining: number;
    notes: string | null;
    numberOfReviews: number;
    reviewHours: number;
    hoursRequiredByBim: number;
    complete: boolean;
    dateAssigned: string;
    dueDate: string;
    UserId: number;
    createdAt: string;
    updatedAt: string;
    Logs: ILog[];
}
export interface ITaskState {
    currentTask: ITask;
    incompletedTasks: ITask[];
    completeTasks: ITask[];
    loading: boolean;
    edit: boolean;
    showCompleted: boolean;
    showCreateTaskForm: boolean;
    search: string;
}
export declare type SetTasksAction = {
    payload: ITask[];
};
export declare type SetLoadingTasksAction = {
    payload: boolean;
};
export declare type SetEditTaskAction = {
    payload: boolean;
};
export declare type SetShowModalAction = {
    payload: boolean;
};
export declare type SetCurrentTaskAction = {
    payload: ITask;
};
export declare type SetShowCreateTaskForm = {
    payload: boolean;
};
export declare type FindAndReplaceTaskAction = {
    payload: ITask;
};
export declare type SearchTaskAction = {
    payload: string;
};
