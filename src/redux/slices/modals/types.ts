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

export type SetShowModalAction = { payload: boolean };
export type SetAddHoursAction = { payload: number };
export type SetModalAction = { payload: { id: number; header: string; command: Command; taskId?: number } };

export type Command = 'complete' | 'delete' | 'deleteLogItem' | 'deleteComplete' | 'addHours';
