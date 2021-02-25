import { IGlobalState } from '../../types';
import { IDrawerState } from './types';
export declare const setDrawer: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const getDrawerState: (state: IGlobalState) => IDrawerState;
declare const _default: import("redux").Reducer<IDrawerState, import("redux").AnyAction>;
export default _default;
