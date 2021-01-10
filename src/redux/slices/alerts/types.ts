export interface IAlert {
    message: string;
    type: 'error' | 'success' | 'info' | 'warning' | undefined;
}

export type AlertStateType = IAlert[];
export type AlertAction = { payload: IAlert };
