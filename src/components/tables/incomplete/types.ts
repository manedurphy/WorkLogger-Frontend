import { ITask } from '../../../redux/slices/tasks/types';

export interface ITaskIdProps {
    taskId: number;
}

export interface IRowProps {
    row: ITask;
}

export interface IRowOpenProps extends IRowProps {
    open: boolean;
}

export interface ITableProps {
    row: ITask;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
