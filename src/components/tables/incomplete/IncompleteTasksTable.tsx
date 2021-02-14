import React, { Fragment } from 'react';
import Dropdown from './components/dropdown/IncompleteTaskDropDown';
import useIncompleteTasksTableStyles from './styles';
import TasksTable from '../tasksTable/TasksTable';
import { Box } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksState, setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const { add } = useIncompleteTasksTableStyles();
    const dispatch = useDispatch();
    const { incompletedTasks } = useSelector(getTasksState);

    console.log(incompletedTasks);
    return (
        <Fragment>
            <TasksTable tasks={incompletedTasks} Dropdown={Dropdown} />
            <Box display={'flex'} justifyContent={'flex-end'}>
                <AddCircle className={add} onClick={() => dispatch(setShowCreateNewTaskForm(true))} />
            </Box>
        </Fragment>
    );
};

export default IncompleteTasksTable;
