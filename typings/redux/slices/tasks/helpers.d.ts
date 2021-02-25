import { IAlert } from '../alerts/types';
import { ITask } from './types';
import { FormData } from '../../../components/forms/types';
export declare function getTaskById(id: number): Promise<ITask>;
export declare function getIncompleteTasks(): Promise<ITask[]>;
export declare function completeTask(id: number): Promise<IAlert>;
export declare function deleteTask(id: number): Promise<IAlert>;
export declare function createTask(formData: FormData): Promise<IAlert>;
export declare function updateTask(id: number, formData: FormData): Promise<IAlert>;
export declare function getCompleteTasks(): Promise<ITask[]>;
export declare function addHours(taskId: number, hours: {
    [key: string]: string;
}): Promise<IAlert>;
