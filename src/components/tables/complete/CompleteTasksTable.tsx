import React from 'react';
import TasksTable from '../tasksTable/TasksTable';
import IncompleteTaskActions from '../incomplete/IncompleteTaskActions';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const CompleteTasksTable = (): JSX.Element => {
    const { completeTasks } = useSelector(getTasksState);
    return <TasksTable tasks={completeTasks} Actions={IncompleteTaskActions} />;
};

export default CompleteTasksTable;
