import React, { useState } from 'react';
import useUIStyles from './styles';
import thinking from '../../../assets/thinking-art-min.png';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Redirect } from 'react-router';

const NoCompleteTasks = (): JSX.Element => {
    const [goHome, setGoHome] = useState(false);
    const { noTaskContainer, child, button, img } = useUIStyles();
    return (
        <div className={noTaskContainer}>
            <Box className={child}>
                <img src={thinking} className={img} />
            </Box>
            <Box className={child}>You have not completed any tasks</Box>
            <Box className={child}>
                <Button className={button} color={'primary'} variant={'contained'} onClick={() => setGoHome(true)}>
                    To Dashboard
                </Button>
            </Box>
            {goHome && <Redirect to={'/'} />}
        </div>
    );
};

export default NoCompleteTasks;
