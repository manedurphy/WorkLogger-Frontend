import React from 'react';
import TasksTable from '../tasksTable/TasksTable';
import Dropdown from '../incomplete/components/dropdown/IncompleteTaskDropDown';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const CompleteTasksTable = (): JSX.Element => {
    const { completeTasks } = useSelector(getTasksState);
    return <TasksTable tasks={completeTasks} Dropdown={Dropdown} />;
};

export default CompleteTasksTable;
