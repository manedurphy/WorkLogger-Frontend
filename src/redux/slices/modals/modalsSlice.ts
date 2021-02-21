import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { initialModalState } from './initialState';
import { IModalState, SetAddHoursAction, SetModalAction, SetShowModalAction } from './types';

const modalsSlice = createSlice({
    name: 'modal',
    initialState: initialModalState as IModalState,
    reducers: {
        setShowModal: (state: IModalState, action: SetShowModalAction) => {
            return {
                ...state,
                show: action.payload,
                addHours: {
                    ...state.addHours,
                    show: action.payload === false && false,
                },
            };
        },
        setModal: (state: IModalState, action: SetModalAction) => {
            return {
                ...state,
                ...action.payload,
                show: true,
            };
        },
        setAddHoursModal: (state: IModalState, action: SetAddHoursAction) => {
            return {
                ...state,
                addHours: {
                    id: action.payload,
                    show: true,
                },
            };
        },
    },
});

export const { setShowModal, setModal, setAddHoursModal } = modalsSlice.actions;
export const getModalState = (state: IGlobalState): IModalState => state.modal;

export default modalsSlice.reducer;
