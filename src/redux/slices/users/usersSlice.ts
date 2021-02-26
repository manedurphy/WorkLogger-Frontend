import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { IAlert } from '../alerts/types';
import { setRegister, setLogin } from '../auth/authSlice';
import { clearTokens } from '../auth/helpers';
import { getRefreshTokens, getUserInfo, postLoginForm, postRegisterForm } from './helpers';
import { initialUserState } from './initialState';
import {
    IUser,
    IUserState,
    LoginFormData,
    RegisterFormData,
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
        clearUser: (_state: IUserState) => {
            clearTokens();
            return {
                ...initialUserState,
                loading: false,
            };
        },
    },
});

export const { setUser, setLoadingUser, clearUser } = usersSlice.actions;

export const getUserState = (state: IGlobalState): IUserState => state.user;

export const handleLogin = (data: LoginFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const user: IUser = await postLoginForm(data);
        dispatch(setUser(user));
        dispatch(setLogin(true));
    } catch (error) {
        dispatch(setLoadingUser(false));
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export const handleRegister = (data: RegisterFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
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
        dispatch(refreshUser());
    }
};

export const refreshUser = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const user = await getRefreshTokens();
        dispatch(setUser(user));
        dispatch(setLogin(true));
    } catch (error) {
        dispatch(setLogin(false));
        dispatch(setLoadingUser(false));
    }
};

export default usersSlice.reducer;
