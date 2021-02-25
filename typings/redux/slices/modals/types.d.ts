export interface IModalState {
    id: number;
    show: boolean;
    header: string;
    command: Command;
    taskId: number;
    addHours: {
        id: number;
        show: boolean;
    };
}
export declare type SetShowModalAction = {
    payload: boolean;
};
export declare type SetAddHoursAction = {
    payload: number;
};
export declare type SetModalAction = {
    payload: {
        id: number;
        header: string;
        command: Command;
        taskId?: number;
    };
};
export declare type Command = 'complete' | 'delete' | 'deleteLogItem' | 'deleteComplete' | 'addHours';
