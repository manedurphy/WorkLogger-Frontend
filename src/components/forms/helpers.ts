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
