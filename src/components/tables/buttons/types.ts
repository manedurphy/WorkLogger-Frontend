import { ILog } from '../../../redux/slices/log/types';
import { ITask } from '../../../redux/slices/tasks/types';

export interface IButtonProps {
    taskId: number;
}

export interface LogButtonProps {
    log: ILog[];
}

export interface EditTaskButtonProps {
    task: ITask;
}

export interface EditLogButtonProps {
    logItem: ILog;
}
