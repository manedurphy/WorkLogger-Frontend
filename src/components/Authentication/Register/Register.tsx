import React, { ChangeEvent, useState, FormEvent } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RegisterForm from './RegisterForm';
import Copyright from '../Copyright';
import { handleRegister } from '../../../redux/slices/users/usersSlice';
import { Redirect } from 'react-router-dom';
import { getAuthState } from '../../../redux/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, CssBaseline, Box, makeStyles, Typography, Container } from '@material-ui/core';

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
}));

const Register = (): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(getAuthState);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleRegister(formData));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            {auth.registerSuccess && <Redirect to="/login" />}
        </Container>
    );
};

export default Register;
