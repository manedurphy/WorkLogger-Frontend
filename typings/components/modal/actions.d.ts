export declare const actions: {
    complete: (id: number) => import("redux-thunk").ThunkAction<void, any, unknown, import("redux").Action<string>>;
    delete: (id: number) => import("redux-thunk").ThunkAction<void, any, unknown, import("redux").Action<string>>;
    deleteLogItem: (id: number, taskId: number) => import("redux-thunk").ThunkAction<void, any, unknown, import("redux").Action<string>>;
    deleteComplete: (id: number) => import("redux-thunk").ThunkAction<void, any, unknown, import("redux").Action<string>>;
    addHours: (id: number, formData: {
        [key: string]: string;
    }) => import("redux-thunk").ThunkAction<void, any, unknown, import("redux").Action<string>>;
};
