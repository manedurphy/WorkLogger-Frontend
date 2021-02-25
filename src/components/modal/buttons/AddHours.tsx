import React from 'react';
import useButtonStyles from '../styles';
import Button from '@material-ui/core/Button';

const AddHours = (): JSX.Element => {
    const { addHoursBtn } = useButtonStyles();
    return (
        <Button variant={'contained'} type={'submit'} className={addHoursBtn}>
            Add Hours
        </Button>
    );
};

export default AddHours;
