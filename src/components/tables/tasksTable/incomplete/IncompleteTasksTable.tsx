import React, { Fragment } from 'react';
import IncompleteTaskActions from './IncompleteTaskActions';
import useTasksTableStyles from '../styles';
import TasksTable from '../common/TasksTable';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import AddCircle from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksState, handleClickAdd } from '../../../../redux/slices/tasks/tasksSlice';
import { handleGetReport } from '../../../../redux/slices/report/reportSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const dispatch = useDispatch();
    const { add, link } = useTasksTableStyles();
    const { incompletedTasks } = useSelector(getTasksState);

    return (
        <Fragment>
            <TasksTable tasks={incompletedTasks} Actions={IncompleteTaskActions} />
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Link className={link} onClick={() => dispatch(handleGetReport())}>
                    See Weekly Report
                </Link>
                <AddCircle className={add} data-testid={'add-btn'} onClick={() => dispatch(handleClickAdd())} />
            </Box>
        </Fragment>
    );
};

export default IncompleteTasksTable;
