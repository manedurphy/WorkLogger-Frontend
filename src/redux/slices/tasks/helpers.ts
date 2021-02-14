import axios, { AxiosResponse } from 'axios';
import { AlertConstants } from '../alerts/AlertConstants';
import { IAlert } from '../alerts/types';
import { getTokens } from '../auth/helpers';
import { ITask } from './types';

export async function getIncompleteTasks(): Promise<ITask[]> {
    const { token } = getTokens();
    const res: AxiosResponse<ITask[]> = await axios.get('http://localhost:5000/api/tasks/incomplete', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}

export async function completeTask(id: number): Promise<IAlert> {
    const { token } = getTokens();
    const res: AxiosResponse<IAlert> = await axios.put(`http://localhost:5000/api/tasks/incomplete/${id}`, null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { ...res.data, type: AlertConstants.Success };
}

export async function deleteTask(id: number): Promise<IAlert> {
    const { token } = getTokens();
    const res: AxiosResponse<IAlert> = await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { ...res.data, type: AlertConstants.Warning };
}

export async function createTask(formData: any): Promise<IAlert> {
    const { token } = getTokens();
    const res: AxiosResponse<IAlert> = await axios.post('http://localhost:5000/api/tasks', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { ...res.data, type: AlertConstants.Success };
}

export async function getCompleteTasks(): Promise<ITask[]> {
    const { token } = getTokens();
    const res: AxiosResponse<ITask[]> = await axios.get('http://localhost:5000/api/tasks/complete', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}
