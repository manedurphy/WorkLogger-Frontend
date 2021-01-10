export interface IAlert {
    message: string;
    statusCode: number;
}
export declare type AlertStateType = IAlert[];
export declare type AlertAction = {
    payload: IAlert;
};
