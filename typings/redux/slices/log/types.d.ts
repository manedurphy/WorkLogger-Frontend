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
export declare type SetLogAction = {
    payload: ILog[];
};
export declare type SetLogItemAction = {
    payload: ILog;
};
export declare type SetShowLog = {
    payload: boolean;
};
export declare type SetShowLogForm = {
    payload: boolean;
};
