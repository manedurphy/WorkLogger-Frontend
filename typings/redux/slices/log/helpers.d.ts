import { LogFormData } from '../../../components/forms/types';
export declare function updateLog(id: number, formData: LogFormData): Promise<{
    type: "success";
    message: string;
}>;
export declare function deleteLogItem(id: number): Promise<{
    type: "warning";
    message: string;
}>;
