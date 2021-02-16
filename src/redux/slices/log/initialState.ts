import { ILogState } from './types';

export const initialLogState: ILogState = {
    currentLogItem: {
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
        day: 0,
        weekOf: '',
        productiveHours: 0,
        loggedAt: '',
        TaskId: -1,
        UserId: -1,
        createdAt: '',
    },
    log: [],
    showLog: false,
    showLogForm: false,
};
