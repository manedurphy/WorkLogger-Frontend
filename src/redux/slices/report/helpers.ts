import axios, { AxiosResponse } from 'axios';
import { getTokens } from '../auth/helpers';
import { WeeklyReport } from './types';

export async function getWeeklyReport(): Promise<WeeklyReport> {
    const { token } = getTokens();

    const res: AxiosResponse<WeeklyReport> = await axios.get(
        '/api/logs/dates',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return res.data;
}
