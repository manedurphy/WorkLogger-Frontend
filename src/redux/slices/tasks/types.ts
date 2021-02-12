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

export interface ILog {
    id: number;
    name: string;
    projectNumber: number;
    hoursAvailableToWork: number;
    hoursWorked: number;
    hoursRemaining: number;
    notes: string;
    numberOfReviews: number;
    reviewHours: number;
    hoursRequiredByBim: number;
    complete: boolean;
    day: number;
    weekOf: string;
    productiveHours: number;
    loggedAt: string;
    TaskId: number;
    UserId: number;
    createdAt: string;
}

export interface ITaskState {
    currentTask: ITask;
    incompletedTasks: ITask[];
    completeTasks: ITask[];
    loading: boolean;
    edit: boolean;
    showLog: boolean;
    showCompleted: boolean;
}

export type SetTasksAction = { payload: ITask[] };
export type SetLoadingTasksAction = { payload: boolean };
export type SetEditTaskAction = { payload: boolean };
export type SetShowModalAction = { payload: boolean };
export type SetCurrentTaskAction = { payload: ITask };
export type SetShowLogAction = { payload: boolean };
