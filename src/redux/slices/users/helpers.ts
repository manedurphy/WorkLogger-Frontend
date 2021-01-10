import axios, { AxiosResponse } from 'axios';
import { setLoginTokens } from '../../../components/Authentication/helpers';

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
