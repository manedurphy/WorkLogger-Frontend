import { createSlice } from '@reduxjs/toolkit';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setRegister, setLogin } from '../auth/authSlice';
import { getUserInfo, postLoginForm, postRegisterForm } from './helpers';
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
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleRegister = (data: LoginFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const success: IAlert = await postRegisterForm(data);
        dispatch(addAlert(success));
        dispatch(setRegister(true));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const verifyUser = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const user = await getUserInfo();
        dispatch(setUser(user));
        dispatch(setLogin(true));
    } catch (error) {
        dispatch(setLogin(false));
        dispatch(setLoadingUser(false));
    }
};

export default usersSlice.reducer;
