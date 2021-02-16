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
    dateAssigned: string;
    dueDate: string;
}

export interface TaskInputFieldsProps {
    formData: FormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
