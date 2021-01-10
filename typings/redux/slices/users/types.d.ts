import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
export interface LoginFormData {
    email: string;
    password: string;
}
export interface IUserState {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    loading: boolean;
}
export declare type SetUserAction = {
    payload: IUserState;
};
export declare type SetLoadingUserAction = {
    payload: boolean;
};
export declare type ThunkActionType = ThunkAction<void, RootStateOrAny, unknown, Action<string>>;
export declare type ThunkDispatchType = ThunkDispatch<void, RootStateOrAny, Action<string>>;
