import axios, { AxiosResponse } from 'axios';
import { getTokens, setLoginTokens } from '../auth/helpers';
import { AlertConstants } from '../alerts/AlertConstants';
import { IAlert, IAlertResponse } from '../alerts/types';

interface LoginResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    jwt: string;
    refreshToken: string;
}

export async function postLoginForm(data: any): Promise<any> {
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

export async function getUserInfo(): Promise<any> {
    const tokens = getTokens();

    const res: AxiosResponse<any> = await axios.get('http://localhost:5000/api/users/verify-token', {
        headers: { Authorization: `Bearer ${tokens.token}` },
    });

    return res.data;
}
