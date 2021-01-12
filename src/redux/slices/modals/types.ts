export interface IModalState {
    id: number;
    show: boolean;
    header: string;
    command: string;
}

export type SetShowModalAction = { payload: boolean };
export type SetModalAction = { payload: { id: number; header: string; command: string } };
