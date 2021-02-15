import { ILog, ITask } from '../../../redux/slices/tasks/types';

export interface IButtonProps {
    taskId: number;
}

export interface LogButtonProps extends IButtonProps {
    tasks: ITask[];
}

export interface EditTaskButtonProps {
    task: ITask;
}

export interface EditLogButtonProps {
    logItem: ILog;
}
