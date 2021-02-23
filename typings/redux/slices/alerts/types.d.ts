export interface IAlertResponse {
    message: string;
}
export interface IAlert extends IAlertResponse {
    type: 'error' | 'success' | 'info' | 'warning' | undefined;
}
export declare type AlertStateType = IAlert[];
export declare type AlertAction = {
    payload: IAlert;
};
