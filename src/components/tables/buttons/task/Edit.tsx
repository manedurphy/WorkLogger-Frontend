import React from 'react';
import EditButton from '../common/Edit';
import { useDispatch } from 'react-redux';
import { setCurrentTask } from '../../../../redux/slices/tasks/tasksSlice';
import { EditTaskButtonProps } from '../types';

const Edit: React.FC<EditTaskButtonProps> = ({ task }): JSX.Element => {
    const dispatch = useDispatch();
    return <EditButton handleClick={() => dispatch(setCurrentTask(task))} />;
};

export default Edit;
