import React from 'react';
import useUIStyles from './styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { handleClickAdd } from '../../redux/slices/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

const NoTasks = (): JSX.Element => {
    const dispatch = useDispatch();
    const { noTaskContainer, child, button, img } = useUIStyles();
    return (
        <div className={noTaskContainer}>
            <Box className={child}>
                <img src={'/thinking.png'} className={img} />
            </Box>
            <Box className={child}>No tasks at this time. Add one now!</Box>
            <Box className={child}>
                <Button
                    className={button}
                    color={'primary'}
                    variant={'contained'}
                    onClick={() => dispatch(handleClickAdd())}
                >
                    New Task
                </Button>
            </Box>
        </div>
    );
};

export default NoTasks;
