export interface IModalState {
    id: number;
    show: boolean;
    header: string;
    command: Command;
}

export type SetShowModalAction = { payload: boolean };
export type SetModalAction = { payload: { id: number; header: string; command: Command } };

export type Command = 'complete' | 'delete';
