/* eslint-disable react/prop-types */
import React from 'react';
import { TextField, Link, Grid, Button, makeStyles } from '@material-ui/core';
import { RegisterFormProps } from './types';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
    const classes = useStyles();
    return (
        <form className={classes.form} noValidate onSubmit={props.handleSubmit} data-testid={'register-form'}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={props.formData.firstName}
                        onChange={props.handleChange}
                        inputProps={{ 'data-testid': 'firstName' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={props.formData.lastName}
                        onChange={props.handleChange}
                        inputProps={{ 'data-testid': 'lastName' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={props.formData.email}
                        onChange={props.handleChange}
                        inputProps={{ 'data-testid': 'email' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.formData.password}
                        onChange={props.handleChange}
                        inputProps={{ 'data-testid': 'password' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        id="password2"
                        autoComplete="current-password"
                        value={props.formData.password2}
                        onChange={props.handleChange}
                        inputProps={{ 'data-testid': 'password2' }}
                    />
                </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </form>
    );
};

export default RegisterForm;
