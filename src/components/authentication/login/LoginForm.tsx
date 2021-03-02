/* eslint-disable react/prop-types */
import React from 'react';
import useAuthStyles from '../styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { LoginFormProps } from './types';
import { Link } from 'react-router-dom';

const LoginForm: React.FC<LoginFormProps> = ({ formData, handleChange, handleSubmit }): JSX.Element => {
    const { form, submit, link } = useAuthStyles();
    return (
        <form className={form} onSubmit={handleSubmit}>
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
            />
            <Button type={'submit'} fullWidth variant={'contained'} color={'primary'} className={submit}>
                Sign In
            </Button>
            <Box display={'flex'} justifyContent={'center'}>
                <Link className={link} to={'/register'}>
                    Don't have an account? Sign Up
                </Link>
            </Box>
        </form>
    );
};

export default LoginForm;
