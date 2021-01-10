export declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    counter: {
        value: number;
    };
    alerts: never[];
    tasks: import("./slices/tasks/types").ITaskState;
    user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        loading: boolean;
    };
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    counter: {
        value: number;
    };
    alerts: never[];
    tasks: import("./slices/tasks/types").ITaskState;
    user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        loading: boolean;
    };
}>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    counter: {
        value: number;
    };
    alerts: never[];
    tasks: import("./slices/tasks/types").ITaskState;
    user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        loading: boolean;
    };
}>, import("redux").AnyAction, undefined>]>;
