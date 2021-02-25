/* eslint-disable react/prop-types */
import React from 'react';
import useAuthStyles from '../styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RegisterFormProps } from './types';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC<RegisterFormProps> = ({ formData, handleChange, handleSubmit }): JSX.Element => {
    const { form, submit, link } = useAuthStyles();
    return (
        <form className={form} onSubmit={handleSubmit} data-testid={'register-form'}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete={'fname'}
                        name={'firstName'}
                        variant={'outlined'}
                        required
                        fullWidth
                        id={'firstName'}
                        label={'First Name'}
                        autoFocus
                        value={formData.firstName}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'firstName' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant={'outlined'}
                        required
                        fullWidth
                        id={'lastName'}
                        label={'Last Name'}
                        name={'lastName'}
                        autoComplete={'lname'}
                        value={formData.lastName}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'lastName' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant={'outlined'}
                        required
                        fullWidth
                        id={'email'}
                        label={'Email Address'}
                        name={'email'}
                        autoComplete={'email'}
                        value={formData.email}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'email' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant={'outlined'}
                        required
                        fullWidth
                        name={'password'}
                        label={'Password'}
                        type={'password'}
                        id={'password'}
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'password' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant={'outlined'}
                        required
                        fullWidth
                        name={'password2'}
                        label={'Confirm Password'}
                        type={'password'}
                        id={'password2'}
                        autoComplete={'current-password'}
                        value={formData.password2}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'password2' }}
                    />
                </Grid>
            </Grid>
            <Button type={'submit'} fullWidth variant={'contained'} color={'primary'} className={submit}>
                Sign Up
            </Button>
            <Box display={'flex'} justifyContent={'center'}>
                <Link className={link} to={'/login'}>
                    Already have an account? Sign in
                </Link>
            </Box>
        </form>
    );
};

export default RegisterForm;
