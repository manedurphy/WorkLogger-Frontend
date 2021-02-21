import React from 'react';
import useFormStyles from '../styles';
import { Button, Container } from '@material-ui/core';
import { Command } from '../../../redux/slices/modals/types';

interface UpdateDeleteProps {
    handleDelete: () => {
        payload: {
            id: number;
            header: string;
            command: Command;
            taskId?: number | undefined;
        };
        type: string;
    };
}

const UpdateDelete: React.FC<UpdateDeleteProps> = ({ handleDelete }): JSX.Element => {
    const { submit, update, del } = useFormStyles();
    return (
        <Container className={submit}>
            <Button className={update} type={'submit'} variant={'contained'} color={'primary'}>
                Update
            </Button>
            <Button className={del} type={'button'} variant={'contained'} onClick={handleDelete}>
                Delete
            </Button>
        </Container>
    );
};

export default UpdateDelete;
