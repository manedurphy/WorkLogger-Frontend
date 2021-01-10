import { createSlice } from '@reduxjs/toolkit';
import { AlertConstants } from '../alerts/AlertConstants';
import { handleAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setRegister, setLogin } from '../auth/authSlice';
import { postLoginForm, postRegisterForm } from './helpers';
import { initialUserState } from './initialState';
import {
    IUserState,
    LoginFormData,
    SetLoadingUserAction,
    SetUserAction,
    ThunkActionType,
    ThunkDispatchType,
} from './types';

const usersSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state: IUserState, action: SetUserAction) => {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        },
        setLoadingUser: (state: IUserState, action: SetLoadingUserAction) => {
            return {
                ...state,
                loading: action.payload,
            };
        },
    },
});

const { setUser, setLoadingUser } = usersSlice.actions;

export const handleLogin = (data: LoginFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        dispatch(setLoadingUser(true));
        const user: IUserState = await postLoginForm(data);
        dispatch(setUser(user));
        dispatch(setLogin(true));
    } catch (error) {
        dispatch(setLoadingUser(false));
        dispatch(handleAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleRegister = (data: LoginFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const success: IAlert = await postRegisterForm(data);
        dispatch(handleAlert(success));
        dispatch(setRegister(true));
    } catch (error) {
        dispatch(handleAlert({ ...error.response.data, type: AlertConstants.Warning }));
    }
};

export default usersSlice.reducer;
