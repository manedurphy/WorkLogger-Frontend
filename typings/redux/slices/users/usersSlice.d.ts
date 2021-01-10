import { IUserState, LoginFormData, ThunkActionType } from './types';
export declare const handleLogin: (data: LoginFormData) => ThunkActionType;
export declare const setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUserState, string>, setLoadingUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
declare const _default: import("redux").Reducer<{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    loading: boolean;
}, import("redux").AnyAction>;
export default _default;
