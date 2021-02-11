import { ITask } from '../../../redux/slices/tasks/types';

export interface IncompleteTaskActionsProps {
    taskId: number;
}

export interface IncompleteTaskDropDownProps {
    row: ITask;
    open: boolean;
}

export interface IDropDownProps {
    row: ITask;
}

export interface IRowProps {
    row: ITask;
}

export interface ITableProps {
    row: ITask;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
