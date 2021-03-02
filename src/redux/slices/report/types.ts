type day = 2 | 3 | 4 | 5 | 6;

interface DailyReport {
    hours: string;
    day: day;
}

export type Total = {
    [key in day]: number;
};

export interface WeeklyReport {
    [key: string]: DailyReport[];
}

export interface IReportState {
    report: WeeklyReport;
    showReport: boolean;
    total: Total;
}

export type SetReportAction = { payload: { report: WeeklyReport; total: Total } };
export type SetShowReportAction = { payload: boolean };
