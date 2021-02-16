import React, { FormEvent, ChangeEvent, useState } from 'react';
import SubmitButton from '../buttons/Submit';
import FormContainer from '../common/FormContainer';
import CommonInputFields from '../common/CommonInputFields';
import TaskInputFields from './TaskInputFields';
import FormHeader from '../common/FormHeader';
import { getNewForm } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksState, handleSubmitNewTask } from '../../../redux/slices/tasks/tasksSlice';
import { setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const NewTaskForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const { showCreateTaskForm } = useSelector(getTasksState);
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
        <FormContainer handleSubmit={handleSubmit} show={showCreateTaskForm}>
            <FormHeader header={'Create New Task'} action={setShowCreateNewTaskForm} />
            <CommonInputFields formData={formData} handleChange={handleChange}>
                <TaskInputFields
                    handleChange={handleChange}
                    dateAssigned={formData.dateAssigned}
                    dueDate={formData.dueDate}
                />
            </CommonInputFields>
            <SubmitButton />
        </FormContainer>
    );
};

export default NewTaskForm;
