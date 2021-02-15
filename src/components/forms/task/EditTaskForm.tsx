import React, { FormEvent, ChangeEvent, useState } from 'react';
import FormContainer from '../common/FormContainer';
import UpdateDelete from '../buttons/UpdateDelete';
import TaskInputFields from '../common/TaskInputFields';
import FormHeader from '../common/FormHeader';
import { getNewForm } from '../helpers';
import { useDispatch } from 'react-redux';
import { handleSubmitNewTask } from '../../../redux/slices/tasks/tasksSlice';

const EditTaskForm = (): JSX.Element => {
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
            <FormHeader header={'Edit Task'} />
            <TaskInputFields formData={formData} handleChange={handleChange} />
            <UpdateDelete />
        </FormContainer>
    );
};

export default EditTaskForm;
