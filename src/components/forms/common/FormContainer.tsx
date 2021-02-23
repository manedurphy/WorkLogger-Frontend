import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import useFormStyles from '../styles';
import { FormContainerProps } from '../types';

const FormContainer: React.FC<FormContainerProps> = ({ handleSubmit, show, children }): JSX.Element => {
    const { paper, form } = useFormStyles();
    return (
        <Fade in={show} timeout={500} unmountOnExit>
            <Paper className={paper}>
                <form className={form} onSubmit={handleSubmit}>
                    {children}
                </form>
            </Paper>
        </Fade>
    );
};

export default FormContainer;
