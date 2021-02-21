import axios, { AxiosResponse } from 'axios';
import { AlertConstants } from '../alerts/AlertConstants';
import { LogFormData } from '../../../components/forms/types';
import { IAlert } from '../alerts/types';
import { getTokens } from '../auth/helpers';
import { ILog } from './types';

export async function updateLog(id: number, formData: LogFormData) {
    const { token } = getTokens();
    const res: AxiosResponse<IAlert> = await axios.put(`/api/logs/log-item/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { ...res.data, type: AlertConstants.Success };
}

export async function deleteLogItem(id: number) {
    const { token } = getTokens();
    const res: AxiosResponse<IAlert> = await axios.delete(`/api/logs/log-item/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { ...res.data, type: AlertConstants.Warning };
}

export async function getLog(taskId: number) {
    const { token } = getTokens();
    const res: AxiosResponse<ILog[]> = await axios.get(`/api/logs/${taskId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}
