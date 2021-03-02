import { ChangeEvent, FormEvent } from 'react';

interface FormData {
    email: string;
    password: string;
}

export interface LoginFormProps {
    formData: FormData;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
