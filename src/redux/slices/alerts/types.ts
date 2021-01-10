export interface IAlert {
    message: string;
    statusCode: number;
}

export type AlertStateType = IAlert[];
export type AlertAction = { payload: IAlert };
