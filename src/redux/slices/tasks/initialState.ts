import { ITaskState } from './types';

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
        Logs: [],
    },
    incompletedTasks: [],
    completeTasks: [],
    loading: false,
    edit: false,
    showLog: false,
    showCompleted: false,
};
