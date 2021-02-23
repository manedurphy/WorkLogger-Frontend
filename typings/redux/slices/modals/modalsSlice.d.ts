import { IGlobalState } from '../../types';
import { IModalState } from './types';
export declare const setShowModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: number;
    header: string;
    command: import("./types").Command;
    taskId?: number | undefined;
}, string>, setAddHoursModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>;
export declare const getModalState: (state: IGlobalState) => IModalState;
declare const _default: import("redux").Reducer<IModalState, import("redux").AnyAction>;
export default _default;
