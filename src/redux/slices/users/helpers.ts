import axios, { AxiosResponse } from 'axios';
import { getTokens, setLoginTokens } from '../auth/helpers';
import { AlertConstants } from '../alerts/AlertConstants';
import { IAlert, IAlertResponse } from '../alerts/types';
import { IUser, LoginResponse } from './types';

export async function postLoginForm(data: any): Promise<IUser> {
    const res: AxiosResponse<LoginResponse> = await axios.post('http://localhost:5000/api/users/login', data);

    const { jwt, refreshToken } = res.data;
    setLoginTokens(jwt, refreshToken);

    const { id, firstName, lastName, email } = res.data;
    return { id, firstName, lastName, email };
}

export async function postRegisterForm(data: any): Promise<IAlert> {
    const res: AxiosResponse<IAlertResponse> = await axios.post('http://localhost:5000/api/users/register', data);
    return { ...res.data, type: AlertConstants.Success };
}

export async function getUserInfo(): Promise<IUser> {
    const tokens = getTokens();

    const res: AxiosResponse<LoginResponse> = await axios.get('http://localhost:5000/api/users/verify-token', {
        headers: { Authorization: `Bearer ${tokens.token}` },
    });

    return res.data;
}

export async function getRefreshTokens(): Promise<IUser> {
    const tokens = getTokens();

    const res: AxiosResponse<LoginResponse> = await axios.get('http://localhost:5000/api/users/refresh', {
        headers: { Authorization: `Bearer ${tokens.refreshToken}` },
    });

    const { jwt, refreshToken } = res.data;
    setLoginTokens(jwt, refreshToken);

    const { id, firstName, lastName, email } = res.data;
    return { id, firstName, lastName, email };
}
