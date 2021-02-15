import React from 'react';
import useFormStyles from '../styles';
import { Fade, Paper } from '@material-ui/core';

const FormContainer: React.FC<any> = ({ handleSubmit, children }): JSX.Element => {
    const { paper, form } = useFormStyles();
    return (
        <Fade in={true} timeout={500} enter>
            <Paper className={paper}>
                <form className={form} onSubmit={handleSubmit}>
                    {children}
                </form>
            </Paper>
        </Fade>
    );
};

export default FormContainer;
