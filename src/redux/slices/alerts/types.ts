export interface IAlertResponse {
    message: string;
}

export interface IAlert extends IAlertResponse {
    type: 'error' | 'success' | 'info' | 'warning' | undefined;
}

export type AlertStateType = IAlert[];
export type AlertAction = { payload: IAlert };
