/* eslint-disable react/prop-types */
import React from 'react';
import useAuthStyles from '../styles';
import { Button, Box, Link, TextField } from '@material-ui/core';
import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = (props): JSX.Element => {
    const { form, submit } = useAuthStyles();
    return (
        <form className={form} noValidate onSubmit={props.handleSubmit}>
            <TextField
                variant={'outlined'}
                margin={'normal'}
                required
                fullWidth
                id={'email'}
                label={'Email Address'}
                inputProps={{ 'aria-label': 'email-address' }}
                name={'email'}
                autoComplete={'email'}
                autoFocus
                value={props.formData.email}
                onChange={props.handleChange}
            />
            <TextField
                variant={'outlined'}
                margin={'normal'}
                required
                fullWidth
                name={'password'}
                label={'Password'}
                inputProps={{ 'aria-label': 'password' }}
                type={'password'}
                id={'password'}
                autoComplete={'current-password'}
                value={props.formData.password}
                onChange={props.handleChange}
            />
            <Button type={'submit'} fullWidth variant={'contained'} color={'primary'} className={submit}>
                Sign In
            </Button>
            <Box display={'flex'} justifyContent={'center'}>
                <Link href={'/register'} variant={'body2'}>
                    {"Don't have an account? Sign Up"}
                </Link>
            </Box>
        </form>
    );
};

export default LoginForm;
