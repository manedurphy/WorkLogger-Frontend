import React, { ChangeEvent, useState, FormEvent } from 'react';
// import SnackBarComponent from '../UI/SnackBar';
import Copyright from './Copyright';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { RegisterType } from '../../global/types/type';
// import { GlobalContext } from '../../context/GlobalState';
// import { Alerts } from '../../enums';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    makeStyles,
    Typography,
    Container,
} from '@material-ui/core';

// interface Alert {
//     message: string;
// }

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = (): JSX.Element => {
    const classes = useStyles();
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    // const { state, dispatch } = useContext(GlobalContext);
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            /*const res: AxiosResponse<Alert> =*/ await axios.post(
                'http://localhost:5000/api/users/register',
                formData,
            );

            setSignUpSuccess(true);
        } catch (error) {
            console.log(error.response);
            // dispatch({ type: Alerts.setAlerts, payload: err.response.data });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    {alert && (
                        <div className="alert alert-danger text-center" role="alert">
                            {alert}
                        </div>
                    )}
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
                                value={formData.firstName}
                                onChange={handleChange}
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
                                value={formData.lastName}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
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
                                value={formData.password2}
                                onChange={handleChange}
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
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            {signUpSuccess && <Redirect to="/login" />}
            {/* {state.alerts.map((alert, i) => (
                <SnackBarComponent
                    key={i}
                    message={alert.message}
                    type={alert.type}
                    anchor={{ vertical: 'top', horizontal: 'center' }}
                />
            ))} */}
        </Container>
    );
};

export default SignUp;
