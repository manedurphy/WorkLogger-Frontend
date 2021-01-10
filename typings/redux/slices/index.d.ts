declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    counter: {
        value: number;
    };
    alerts: never[];
    tasks: import("./tasks/types").ITaskState;
    user: import("./users/types").IUserState;
}>, import("redux").AnyAction>;
export default _default;
