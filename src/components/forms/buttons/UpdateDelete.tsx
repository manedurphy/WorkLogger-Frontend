import React from 'react';
import useFormStyles from '../styles';
import { Button, Container } from '@material-ui/core';

const UpdateDelete = () => {
    const { submit, update, del } = useFormStyles();
    return (
        <Container className={submit}>
            <Button className={update} type={'button'} variant={'contained'} color={'primary'}>
                Update
            </Button>
            <Button className={del} type={'button'} variant={'contained'}>
                Delete
            </Button>
        </Container>
    );
};

export default UpdateDelete;
