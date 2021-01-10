import { IAlert } from './slices/alerts/types';
import { IAuthState } from './slices/auth/types';
import { IUserState } from './slices/users/types';

export interface IGlobalState {
    auth: IAuthState;
    alerts: IAlert[];
    user: IUserState;
}
