import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { initialDrawerState } from './initialState';
import { IDrawerState, ISetDrawerAction } from './types';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: initialDrawerState,
    reducers: {
        setDrawer: (state: IDrawerState, action: ISetDrawerAction) => {
            return { ...state, open: action.payload };
        },
    },
});

export const { setDrawer } = drawerSlice.actions;

export const getDrawerState = (state: IGlobalState) => state.drawer;

export default drawerSlice.reducer;
