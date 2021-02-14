import { ITask } from '../../../redux/slices/tasks/types';

export interface TasksTableProps {
    tasks: ITask[];
    Actions: any;
}

export interface RowProps {
    task: ITask;
    Actions: any;
}

export interface DropdownProps {
    task: ITask;
    open: boolean;
    Actions: any;
}
