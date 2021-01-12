/* eslint-disable react/prop-types */
import React from 'react';
import { setModal } from '../../../redux/slices/modals/modalsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IncompleteTaskActionsProps } from './types';
import { createStyles, IconButton, makeStyles } from '@material-ui/core';
import { getTasksState, findAndSetCurrentTask } from '../../../redux/slices/tasks/tasksSlice';
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    CheckCircleOutline as CheckCircleOutlineIcon,
    LibraryBooks,
} from '@material-ui/icons';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: 'green',
        },
        button: {
            color: 'purple',
        },
    }),
);

const IncompleteTaskActions: React.FC<IncompleteTaskActionsProps> = (props): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { incompletedTasks } = useSelector(getTasksState);

    return (
        <React.Fragment>
            <IconButton
                color={'primary'}
                onClick={() => dispatch(findAndSetCurrentTask(props.taskId, incompletedTasks))}
            >
                <EditIcon />
            </IconButton>
            <IconButton
                color={'secondary'}
                onClick={() =>
                    dispatch(
                        setModal({ id: props.taskId, header: 'Are you sure you want to delete?', command: 'delete' }),
                    )
                }
            >
                <DeleteIcon />
            </IconButton>
            <IconButton
                className={classes.root}
                onClick={() =>
                    dispatch(
                        setModal({ id: props.taskId, header: 'Ready to complete this task?', command: 'complete' }),
                    )
                }
            >
                <CheckCircleOutlineIcon />
            </IconButton>
            <IconButton
                className={classes.button}
                // onClick={(e) => handleAction(e, props.row.projectNumber, Commands.LOG)}
            >
                <LibraryBooks />
            </IconButton>
        </React.Fragment>
    );
};

export default IncompleteTaskActions;
