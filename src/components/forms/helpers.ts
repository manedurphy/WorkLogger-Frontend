import { ILog } from '../../redux/slices/log/types';
import { ITask } from '../../redux/slices/tasks/types';

export function getNewForm() {
    return {
        name: '',
        projectNumber: 0,
        hoursAvailableToWork: 0,
        hoursWorked: 0,
        reviewHours: 0,
        hoursRequiredByBim: 0,
        numberOfReviews: 0,
        notes: '',
        dateAssigned: '',
        dueDate: '',
    };
}

export function getEditForm(currentTask: ITask) {
    return {
        name: currentTask.name,
        projectNumber: currentTask.projectNumber,
        hoursAvailableToWork: currentTask.hoursAvailableToWork,
        hoursWorked: currentTask.hoursWorked,
        reviewHours: currentTask.reviewHours,
        hoursRequiredByBim: currentTask.hoursRequiredByBim,
        numberOfReviews: currentTask.numberOfReviews,
        notes: currentTask.notes,
        dateAssigned: currentTask.dateAssigned.slice(0, 10),
        dueDate: currentTask.dueDate.slice(0, 10),
    };
}

export function getEditLogForm(currentLog: ILog) {
    return {
        name: currentLog.name,
        projectNumber: currentLog.projectNumber,
        hoursAvailableToWork: currentLog.hoursAvailableToWork,
        hoursWorked: currentLog.hoursWorked,
        reviewHours: currentLog.reviewHours,
        hoursRequiredByBim: currentLog.hoursRequiredByBim,
        numberOfReviews: currentLog.numberOfReviews,
        notes: currentLog.notes,
        loggedAt: currentLog.loggedAt.slice(0, 10),
    };
}
