import { createSlice } from '@reduxjs/toolkit';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setRegister, setLogin } from '../auth/authSlice';
import { getRefreshTokens, getUserInfo, postLoginForm, postRegisterForm } from './helpers';
import { initialUserState } from './initialState';
import {
    IUser,
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
        const user: IUser = await postLoginForm(data);
        dispatch(setUser({ ...user, loading: false }));
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
        dispatch(setUser({ ...user, loading: false }));
        dispatch(setLogin(true));
    } catch (error) {
        dispatch(refreshUser());
    }
};

export const refreshUser = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const user = await getRefreshTokens();
        dispatch(setUser({ ...user, loading: false }));
        dispatch(setLogin(true));
    } catch (error) {
        dispatch(setLogin(false));
        dispatch(setLoadingUser(false));
    }
};

export default usersSlice.reducer;
