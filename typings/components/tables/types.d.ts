/// <reference types="react" />
import { ITask } from '../../redux/slices/tasks/types';
export interface TaskActionsProps {
    task: ITask;
}
export interface TasksTableProps {
    tasks: ITask[];
    Actions: React.FC<TaskActionsProps>;
}
export interface RowProps extends TaskActionsProps {
    Actions: React.FC<TaskActionsProps>;
}
export interface DropdownProps extends RowProps {
    open: boolean;
}
