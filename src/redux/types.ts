import { IAlert } from './slices/alerts/types';
import { IAuthState } from './slices/auth/types';

export interface IGlobalState {
    auth: IAuthState;
    alerts: IAlert[];
}
