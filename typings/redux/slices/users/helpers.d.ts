import { IAlert } from '../alerts/types';
import { IUser, LoginFormData, RegisterFormData } from './types';
export declare function postLoginForm(data: LoginFormData): Promise<IUser>;
export declare function postRegisterForm(data: RegisterFormData): Promise<IAlert>;
export declare function getUserInfo(): Promise<IUser>;
export declare function getRefreshTokens(): Promise<IUser>;
