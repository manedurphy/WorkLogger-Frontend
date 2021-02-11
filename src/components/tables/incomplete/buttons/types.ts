import { ITask } from '../../../../redux/slices/tasks/types';

export interface IButtonProps {
    taskId: number;
}

export interface IEditProps extends IButtonProps {
    incompletedTasks: ITask[];
}
