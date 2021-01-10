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

export type SetUserAction = {
    payload: IUserState;
};

export type SetLoadingUserAction = {
    payload: boolean;
};

export type ThunkActionType = ThunkAction<void, RootStateOrAny, unknown, Action<string>>;
export type ThunkDispatchType = ThunkDispatch<void, RootStateOrAny, Action<string>>;
