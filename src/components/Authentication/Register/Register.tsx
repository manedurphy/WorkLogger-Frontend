import React, { ChangeEvent, useState, FormEvent } from 'react';
import SnackBarComponent from '../../UI/SnackBar';
import RegisterForm from './RegisterForm';
import Copyright from '../Copyright';
import { useDispatch, useSelector } from 'react-redux';
import { handleRegister } from '../../../redux/slices/users/usersSlice';
import { IGlobalState } from '../../../redux/types';
import { IAlert } from '../../../redux/slices/alerts/types';
import { Redirect } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
    const { alerts, auth } = useSelector((state: IGlobalState) => state);
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
            {alerts.map((alert: IAlert, i: number) => (
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

export default Register;
