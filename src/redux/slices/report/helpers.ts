import axios, { AxiosResponse } from 'axios';
import { getTokens } from '../auth/helpers';
import { DailyReport } from './types';

export async function getWeeklyReport(): Promise<DailyReport[]> {
    const { token } = getTokens();

    const res: AxiosResponse<DailyReport[]> = await axios.get('/api/logs/dates', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}
