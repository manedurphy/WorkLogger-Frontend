import { ILog } from '../../redux/slices/log/types';
import { ITask } from '../../redux/slices/tasks/types';
export declare function getNewForm(): {
    name: string;
    projectNumber: number;
    hoursAvailableToWork: number;
    hoursWorked: number;
    reviewHours: number;
    hoursRequiredByBim: number;
    numberOfReviews: number;
    notes: string;
    dateAssigned: string;
    dueDate: string;
};
export declare function getEditForm(currentTask: ITask): {
    name: string;
    projectNumber: number;
    hoursAvailableToWork: number;
    hoursWorked: number;
    reviewHours: number;
    hoursRequiredByBim: number;
    numberOfReviews: number;
    notes: string | null;
    dateAssigned: string;
    dueDate: string;
};
export declare function getEditLogForm(currentLog: ILog): {
    name: string;
    projectNumber: number;
    hoursAvailableToWork: number;
    hoursWorked: number;
    reviewHours: number;
    hoursRequiredByBim: number;
    numberOfReviews: number;
    notes: string;
    loggedAt: string;
};
