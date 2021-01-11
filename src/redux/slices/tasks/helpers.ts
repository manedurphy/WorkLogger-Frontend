import axios, { AxiosResponse } from 'axios';
import { getTokens } from '../auth/helpers';
import { ITask } from './types';

export async function getIncompleteTasks(): Promise<ITask[]> {
    const { token } = getTokens();

    const res: AxiosResponse<ITask[]> = await axios.get('http://localhost:5000/api/tasks/incomplete', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    console.log(res);
    return res.data;
}
