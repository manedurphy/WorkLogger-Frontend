import { handleDeleteLogItem } from '../../redux/slices/log/logSlice';
import { handleCompleteTask, handleDeleteTask } from '../../redux/slices/tasks/tasksSlice';

export const actions = {
    complete: handleCompleteTask,
    delete: handleDeleteTask,
    deleteLogItem: handleDeleteLogItem,
};
