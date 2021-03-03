import { IGlobalState } from '../../types';
import { ThunkActionType } from '../users/types';
import { IReportState, Total } from './types';
export declare const setReport: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    report: import("./types").WeeklyReport;
    total: Total;
}, string>, setShowReport: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const getReportState: (state: IGlobalState) => IReportState;
export declare const handleGetReport: () => ThunkActionType;
declare const _default: import("redux").Reducer<IReportState, import("redux").AnyAction>;
export default _default;
