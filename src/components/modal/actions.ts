import { handleCompleteTask, handleDeleteTask } from '../../redux/slices/tasks/tasksSlice';

export const actions = {
    complete: handleCompleteTask,
    delete: handleDeleteTask,
};
