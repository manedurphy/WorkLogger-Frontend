import { IAlert } from './slices/alerts/types';
import { IAuthState } from './slices/auth/types';
import { IDrawerState } from './slices/drawer/types';
import { IModalState } from './slices/modals/types';
import { ITaskState } from './slices/tasks/types';
import { IUserState } from './slices/users/types';

export interface IGlobalState {
    auth: IAuthState;
    alerts: IAlert[];
    user: IUserState;
    tasks: ITaskState;
    modal: IModalState;
    drawer: IDrawerState;
}
