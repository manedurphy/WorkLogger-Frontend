import { IGlobalState } from '../../types';
import { IAuthState } from './types';
export declare const setRegister: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const getAuthState: (state: IGlobalState) => IAuthState;
declare const _default: import("redux").Reducer<{
    registerSuccess: boolean;
    loginSuccess: boolean;
}, import("redux").AnyAction>;
export default _default;
