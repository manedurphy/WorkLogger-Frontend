import { ILog } from '../../../redux/slices/tasks/types';

export interface LogItemProps {
    logItem: ILog;
}

export interface DropdownProps extends LogItemProps {
    open: boolean;
}
