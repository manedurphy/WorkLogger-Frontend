declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    auth: {
        registerSuccess: boolean;
        loginSuccess: boolean;
    };
    alerts: never[];
    tasks: import("./tasks/types").ITaskState;
    log: import("./log/types").ILogState;
    user: import("./users/types").IUserState;
    modal: import("./modals/types").IModalState;
    drawer: import("./drawer/types").IDrawerState;
    report: import("./report/types").IReportState;
}>, import("redux").AnyAction>;
export default _default;
