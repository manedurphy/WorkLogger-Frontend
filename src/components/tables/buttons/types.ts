import { Action, ThunkAction } from '@reduxjs/toolkit';
import { ILog } from '../../../redux/slices/log/types';
import { Command } from '../../../redux/slices/modals/types';
import { ITask } from '../../../redux/slices/tasks/types';

export interface IButtonProps {
    taskId: number;
}

export interface TaskDeleteButtonProps extends IButtonProps {
    command: Command;
}

export interface LogDeleteButtonProps {
    logId: number;
    taskId: number;
}

export interface LogButtonProps {
    log: ILog[];
}

export interface EditButtonProps {
    handleClick: () => ThunkAction<void, any, unknown, Action<string>>;
}
export interface DeleteButtonProps {
    handleClick: () => {
        payload: {
            id: number;
            header: string;
            command: Command;
        };
        type: string;
    };
}

export interface EditTaskButtonProps {
    task: ITask;
}

export interface EditLogButtonProps {
    logItem: ILog;
}
