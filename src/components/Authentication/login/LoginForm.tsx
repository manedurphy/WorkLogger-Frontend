/* eslint-disable react/prop-types */
import React from 'react';
import useAuthStyles from '../styles';
import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@material-ui/core';
import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = (props): JSX.Element => {
    const { form, submit } = useAuthStyles();
    return (
        <form className={form} noValidate onSubmit={props.handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={props.formData.email}
                onChange={props.handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={props.formData.password}
                onChange={props.handleChange}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" color="primary" className={submit}>
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
