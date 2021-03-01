import React, { Fragment } from 'react';
import IncompleteTaskActions from './IncompleteTaskActions';
import useTasksTableStyles from '../styles';
import TasksTable from '../common/TasksTable';
import Box from '@material-ui/core/Box';
import AddCircle from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksState, handleClickAdd } from '../../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const dispatch = useDispatch();
    const { add } = useTasksTableStyles();
    const { incompletedTasks } = useSelector(getTasksState);

    return (
        <Fragment>
            <TasksTable tasks={incompletedTasks} Actions={IncompleteTaskActions} />
            <Box display={'flex'} justifyContent={'flex-end'}>
                <AddCircle className={add} data-testid={'add-btn'} onClick={() => dispatch(handleClickAdd())} />
            </Box>
        </Fragment>
    );
};

export default IncompleteTasksTable;
