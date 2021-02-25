import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';
import { FormEvent } from 'react';
export interface FormContainerProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    show: boolean;
}
export interface FormHeaderProps {
    header: string;
    action: ActionCreatorWithPayload<boolean, string>;
}
export interface FormData {
    name: string;
    projectNumber: number;
    hoursAvailableToWork: number;
    hoursWorked: number;
    reviewHours: number;
    hoursRequiredByBim: number;
    numberOfReviews: number;
    notes: string | null;
}
export interface TaskFormData extends FormData {
    dateAssigned: string;
    dueDate: string;
}
export interface LogFormData extends FormData {
    loggedAt: string;
}
export interface CommonInputFieldsProps {
    formData: FormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface LogInputFieldsProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    loggedAt: string;
}
export interface TaskInputFieldProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    dateAssigned: string;
    dueDate: string;
}
