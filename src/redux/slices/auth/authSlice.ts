import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { initialAuthState } from './initialState';
import { AuthAction, IAuthState } from './types';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setRegister: (state: IAuthState, action: AuthAction) => {
            return {
                ...state,
                registerSuccess: action.payload,
            };
        },
        setLogin: (state: IAuthState, action: AuthAction) => {
            return {
                ...state,
                registerSuccess: action.payload,
                loginSuccess: action.payload,
            };
        },
    },
});

export const { setRegister, setLogin } = authSlice.actions;
export const getAuthState = (state: IGlobalState) => state.auth;

export default authSlice.reducer;
