import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import FormContainer from '../common/FormContainer';
import UpdateDelete from '../buttons/UpdateDelete';
import CommonInputFields from '../common/CommonInputFields';
import TaskInputFields from './TaskInputFields';
import FormHeader from '../common/FormHeader';
import { getEditForm } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redux/slices/modals/modalsSlice';
import { getTasksState, handleUpdateTask, setEditTask } from '../../../redux/slices/tasks/tasksSlice';

const EditTaskForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const { currentTask, edit } = useSelector(getTasksState);
    const [formData, setFormData] = useState(getEditForm(currentTask));

    useEffect(() => {
        setFormData(getEditForm(currentTask));
    }, [currentTask]);

    const handleDelete = () =>
        dispatch(setModal({ id: currentTask.id, header: 'Are you sure you want to delete?', command: 'delete' }));

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
            <CommonInputFields formData={formData} handleChange={handleChange}>
                <TaskInputFields
                    handleChange={handleChange}
                    dateAssigned={formData.dateAssigned}
                    dueDate={formData.dueDate}
                />
            </CommonInputFields>
            <UpdateDelete handleDelete={handleDelete} />
        </FormContainer>
    );
};

export default EditTaskForm;
