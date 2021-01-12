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
}

export interface ITaskState {
    currentTask: ITask;
    incompletedTasks: ITask[];
    completeTasks: ITask[];
    loading: boolean;
    edit: boolean;
    showCompleted: boolean;
}

export type SetTasksAction = { payload: ITask[] };
export type SetLoadingTasksAction = { payload: boolean };
export type SetEditTaskAction = { payload: boolean };
export type SetCurrentTaskAction = { payload: ITask };
