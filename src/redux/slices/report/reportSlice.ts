import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { getWeeklyReport } from './helpers';
import { initialReportState } from './initialState';
import { IReportState, SetReportAction } from './types';

const reportSlice = createSlice({
    name: 'report',
    initialState: initialReportState,
    reducers: {
        setReport: (state: IReportState, action: SetReportAction) => {
            return {
                ...state,
                report: action.payload,
                showReport: true,
            };
        },
    },
});

export const { setReport } = reportSlice.actions;
export const getReportState = (state: IGlobalState): IReportState =>
    state.report;

export const handleGetReport = (): ThunkActionType => async (
    dispatch: ThunkDispatchType,
) => {
    try {
        const report = await getWeeklyReport();
        dispatch(setReport(report));
    } catch (error) {
        dispatch(
            addAlert({ ...error.response.data, type: AlertConstants.Error }),
        );
    }
};

export default reportSlice.reducer;
