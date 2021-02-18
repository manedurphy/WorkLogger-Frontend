import React from 'react';
import Title from '../../main/components/Title';
import useFormStyles from '../styles';
import CloseIcon from '@material-ui/icons/Close';
import { Box, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FormHeaderProps } from '../types';

const FormHeader: React.FC<FormHeaderProps> = ({ header, action }): JSX.Element => {
    const dispatch = useDispatch();
    const { title } = useFormStyles();
    return (
        <Box className={title}>
            <Title>{header}</Title>
            <IconButton size={'small'} onClick={() => dispatch(action(false))}>
                <CloseIcon />
            </IconButton>
        </Box>
    );
};

export default FormHeader;
