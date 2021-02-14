import { ITask } from '../../redux/slices/tasks/types';

export interface TasksTableProps {
    tasks: ITask[];
    Actions: React.FC<TaskActionsProps>;
}

export interface RowProps {
    task: ITask;
    Actions: React.FC<TaskActionsProps>;
}

export interface DropdownProps {
    task: ITask;
    open: boolean;
    Actions: React.FC<TaskActionsProps>;
}

export interface TaskActionsProps {
    taskId: number;
}
