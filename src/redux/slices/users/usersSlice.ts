import { createSlice } from '@reduxjs/toolkit';
import { postLoginForm } from './helpers';

export interface IUserState {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

type SetUserAction = {
    payload: IUserState;
};

const usersSlice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
    },
    reducers: {
        setUser: (state: IUserState, action: SetUserAction) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const handleLogin = (data: any) => async (dispatch: any) => {
    const user = await postLoginForm(data);

    dispatch(setUser(user));
};

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
