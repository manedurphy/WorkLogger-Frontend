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

export interface ILogState {
    currentLogItem: ILog;
    log: ILog[];
    showLog: boolean;
    showLogForm: boolean;
}

export type SetLogAction = { payload: ILog[] };
export type SetLogItemAction = { payload: ILog };
export type SetShowLog = { payload: boolean };
export type SetShowLogForm = { payload: boolean };
