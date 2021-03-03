import { LogFormData } from '../../../components/forms/types';
import { IAlert } from '../alerts/types';
export declare function updateLog(id: number, formData: LogFormData): Promise<IAlert>;
export declare function deleteLogItem(id: number): Promise<IAlert>;
