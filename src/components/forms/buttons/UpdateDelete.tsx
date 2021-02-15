import React from 'react';
import useFormStyles from '../styles';
import { Button, Container } from '@material-ui/core';

const UpdateDelete = (): JSX.Element => {
    const { submit, update, del } = useFormStyles();
    return (
        <Container className={submit}>
            <Button className={update} type={'submit'} variant={'contained'} color={'primary'}>
                Update
            </Button>
            <Button className={del} type={'button'} variant={'contained'}>
                Delete
            </Button>
        </Container>
    );
};

export default UpdateDelete;
