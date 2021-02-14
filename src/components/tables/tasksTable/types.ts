import { ITask } from '../../../redux/slices/tasks/types';

export interface TasksTableProps {
    tasks: ITask[];
    Dropdown: any;
}

export interface RowProps {
    task: ITask;
    Dropdown: any;
}
