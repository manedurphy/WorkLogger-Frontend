import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { initialModalState } from './initialState';
import { IModalState, SetModalAction, SetShowModalAction } from './types';

const modalsSlice = createSlice({
    name: 'modal',
    initialState: initialModalState as IModalState,
    reducers: {
        setShowModal: (state: IModalState, action: SetShowModalAction) => {
            return {
                ...state,
                show: action.payload,
            };
        },
        setModal: (state: IModalState, action: SetModalAction) => {
            return {
                ...state,
                ...action.payload,
                show: true,
            };
        },
        magic(state) {
            state.command;
        },
    },
});

export const { setShowModal, setModal } = modalsSlice.actions;
export const getModalState = (state: IGlobalState): IModalState => state.modal;

export default modalsSlice.reducer;
