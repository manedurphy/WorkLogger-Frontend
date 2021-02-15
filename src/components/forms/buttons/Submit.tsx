import React from 'react';
import useFormStyles from '../styles';
import { Button, Container } from '@material-ui/core';

const Submit = () => {
    const { submit } = useFormStyles();
    return (
        <Container className={submit}>
            <Button type={'submit'} variant={'contained'} color={'primary'}>
                Submit
            </Button>
        </Container>
    );
};

export default Submit;
