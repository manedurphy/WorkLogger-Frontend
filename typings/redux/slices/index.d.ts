declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    counter: {
        value: number;
    };
    alerts: never[];
    tasks: import("./tasks/types").ITaskState;
    user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        loading: boolean;
    };
}>, import("redux").AnyAction>;
export default _default;
