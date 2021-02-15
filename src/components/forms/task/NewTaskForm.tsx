import React, { FormEvent, ChangeEvent, useState } from 'react';
import SubmitButton from '../buttons/Submit';
import FormContainer from '../common/FormContainer';
import TaskInputFields from '../common/TaskInputFields';
import FormHeader from '../common/FormHeader';
import { getNewForm } from '../helpers';
import { useDispatch } from 'react-redux';
import { handleSubmitNewTask } from '../../../redux/slices/tasks/tasksSlice';
import { setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const NewTaskForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(getNewForm());

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleSubmitNewTask(formData));
        setFormData(getNewForm());
    };

    return (
        <FormContainer handleSubmit={handleSubmit}>
            <FormHeader header={'Create New Task'} action={setShowCreateNewTaskForm} />
            <TaskInputFields formData={formData} handleChange={handleChange} />
            <SubmitButton />
        </FormContainer>
    );
};

export default NewTaskForm;
