import { ILog } from '../../../redux/slices/log/types';
export interface LogItemProps {
    logItem: ILog;
}
export interface DropdownProps extends LogItemProps {
    open: boolean;
}
