import React from 'react';
import TasksTable from '../tasksTable/TasksTable';
import CompleteTaskActions from './CompleteTaskActions';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const CompleteTasksTable = (): JSX.Element => {
    const { completeTasks } = useSelector(getTasksState);
    return <TasksTable tasks={completeTasks} Actions={CompleteTaskActions} />;
};

export default CompleteTasksTable;
