import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React from 'react';
import useFormStyles from '../styles';

const Submit = (): JSX.Element => {
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
