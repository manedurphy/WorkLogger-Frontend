declare type day = 2 | 3 | 4 | 5 | 6;
interface DailyReport {
    hours: string;
    day: day;
}
export declare type Total = {
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
export declare type SetReportAction = {
    payload: {
        report: WeeklyReport;
        total: Total;
    };
};
export declare type SetShowReportAction = {
    payload: boolean;
};
export {};
