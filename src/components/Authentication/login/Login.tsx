import React, { ChangeEvent, FormEvent, useState } from 'react';
import LoginForm from './LoginForm';
import Copyright from '../Copyright';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SnackBarComponent from '../../ui/SnackBar';
import { IGlobalState } from '../../../redux/types';
import { handleLogin } from '../../../redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Avatar, CssBaseline, Box, Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = (): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { alerts, auth } = useSelector((state: IGlobalState) => state);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleLogin(formData));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {auth.loginSuccess && <Redirect to="/" />}
            {alerts.map((alert, i) => (
                <SnackBarComponent
                    key={i}
                    message={alert.message}
                    type={alert.type}
                    anchor={{ vertical: 'bottom', horizontal: 'center' }}
                />
            ))}
        </Container>
    );
};

export default Login;
