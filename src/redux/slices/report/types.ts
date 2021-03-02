interface DailyReport {
    hours: number;
    day: number;
}

export interface WeeklyReport {
    [key: string]: DailyReport[];
}

export interface IReportState {
    report: WeeklyReport;
    showReport: boolean;
}

export type SetReportAction = { payload: WeeklyReport };
