import { handleDeleteLogItem } from '../../redux/slices/log/logSlice';
import { handleCompleteTask, handleDeleteTask, handleDeleteCompleteTask } from '../../redux/slices/tasks/tasksSlice';

export const actions = {
    complete: handleCompleteTask,
    delete: handleDeleteTask,
    deleteLogItem: handleDeleteLogItem,
    deleteComplete: handleDeleteCompleteTask,
};
