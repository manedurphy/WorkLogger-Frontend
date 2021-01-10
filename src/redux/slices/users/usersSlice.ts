import { createSlice } from '@reduxjs/toolkit';
import { postLoginForm } from './helpers';
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

export const handleLogin = (data: LoginFormData): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    const user = await postLoginForm(data);
    dispatch(setUser(user));
};

export const { setUser, setLoadingUser } = usersSlice.actions;
export default usersSlice.reducer;
