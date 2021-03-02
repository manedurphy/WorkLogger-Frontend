import { ChangeEvent, FormEvent } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2: string;
}

export interface RegisterFormProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    formData: FormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
