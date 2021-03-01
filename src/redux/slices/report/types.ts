export interface DailyReport {
    projectNumber: number;
    hours: number;
    day: number;
}

export interface IReportState {
    report: DailyReport[];
    showReport: boolean;
}

export type SetReportAction = { payload: DailyReport[] };
