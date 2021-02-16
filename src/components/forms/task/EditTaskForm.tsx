import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import FormContainer from '../common/FormContainer';
import UpdateDelete from '../buttons/UpdateDelete';
import TaskInputFields from '../common/CommonInputFields';
import FormHeader from '../common/FormHeader';
import { getEditForm } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksState, handleUpdateTask, setEditTask } from '../../../redux/slices/tasks/tasksSlice';

const EditTaskForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const { currentTask, edit } = useSelector(getTasksState);
    const [formData, setFormData] = useState(getEditForm(currentTask));

    useEffect(() => {
        setFormData(getEditForm(currentTask));
    }, [currentTask]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleUpdateTask(currentTask.id, formData));
    };

    return (
        <FormContainer handleSubmit={handleSubmit} show={edit}>
            <FormHeader header={'Edit Task'} action={setEditTask} />
            <TaskInputFields formData={formData} handleChange={handleChange} />
            <UpdateDelete />
        </FormContainer>
    );
};

export default EditTaskForm;
