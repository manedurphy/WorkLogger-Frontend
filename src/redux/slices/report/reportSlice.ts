import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';
import { AlertConstants } from '../alerts/AlertConstants';
import { addAlert } from '../alerts/alertsSlice';
import { ThunkActionType, ThunkDispatchType } from '../users/types';
import { getWeeklyReport } from './helpers';
import { initialReportState } from './initialState';
import { IReportState, SetReportAction, SetShowReportAction, Total } from './types';

const reportSlice = createSlice({
    name: 'report',
    initialState: initialReportState,
    reducers: {
        setReport: (state: IReportState, action: SetReportAction) => {
            return {
                ...state,
                report: { ...action.payload.report },
                total: { ...action.payload.total },
                showReport: true,
            };
        },
        setShowReport: (state: IReportState, action: SetShowReportAction) => {
            return {
                ...state,
                showReport: action.payload,
            };
        },
    },
});

export const { setReport, setShowReport } = reportSlice.actions;
export const getReportState = (state: IGlobalState): IReportState => state.report;

export const handleGetReport = (): ThunkActionType => async (dispatch: ThunkDispatchType) => {
    try {
        const report = await getWeeklyReport();
        const total: Total = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

        for (const key in report) {
            for (let i = 0; i < report[key].length; i++) {
                if (report[key][i].day in total) {
                    total[report[key][i].day] = total[report[key][i].day] + +report[key][i].hours;
                }
            }
        }

        dispatch(setReport({ report, total }));
    } catch (error) {
        dispatch(addAlert({ ...error.response.data, type: AlertConstants.Error }));
    }
};

export default reportSlice.reducer;
