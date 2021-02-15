import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { initialLogState } from './initialState';
import { ILogState, SetLogAction, SetLogItemAction, SetShowLog } from './types';

const logSlice = createSlice({
    name: 'log',
    initialState: initialLogState,
    reducers: {
        setLog: (state: ILogState, action: SetLogAction) => {
            return {
                ...state,
                log: action.payload,
                showLog: true,
            };
        },
        setLogItem: (state: ILogState, action: SetLogItemAction) => {
            return {
                ...state,
                currentLogItem: action.payload,
            };
        },
        setShowLog: (state: ILogState, action: SetShowLog) => {
            return {
                ...state,
                showLog: action.payload,
            };
        },
    },
});

export const { setLog, setLogItem, setShowLog } = logSlice.actions;
export const getLogState = (state: IGlobalState) => state.log;

export default logSlice.reducer;
