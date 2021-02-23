import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = (): JSX.Element => {
    return (
        <Typography variant={'body2'} color={'textSecondary'} align={'center'}>
            {'Copyright © '}
            <Link color={'inherit'}>Work Logger</Link> {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default Copyright;
