import React from 'react';
import Title from '../../main/components/Title';
import useFormStyles from '../styles';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const FormHeader: React.FC<any> = ({ header }): JSX.Element => {
    const dispatch = useDispatch();
    const { title, close } = useFormStyles();
    return (
        <Box className={title}>
            <Title>{header}</Title>
            <Box className={close} onClick={() => dispatch(setShowCreateNewTaskForm(false))}>
                <CloseIcon />
            </Box>
        </Box>
    );
};

export default FormHeader;
