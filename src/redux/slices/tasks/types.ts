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

export const initialTaskState: ITaskState = {
    currentTask: {
        id: 0,
        name: '',
        projectNumber: 0,
        hoursAvailableToWork: 0,
        hoursWorked: 0,
        hoursRemaining: 0,
        notes: '',
        numberOfReviews: 0,
        reviewHours: 0,
        hoursRequiredByBim: 0,
        complete: false,
        dateAssigned: new Date().toString(),
        dueDate: new Date().toString(),
        UserId: -1,
        createdAt: '',
        updatedAt: '',
    },
    incompletedTasks: [],
    completeTasks: [],
    loading: false,
    edit: false,
    showCompleted: false,
};

export type SetTasksAction = { payload: ITask[] };
export type SetLoadingTasksAction = { payload: boolean };
