import React, { ChangeEvent, FormEvent, useState } from 'react';
// import { setLoginTokens } from './helpers';
import { IGlobalState } from '../../redux/types';
import { handleLogin } from '../../redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SnackBarComponent from '../UI/SnackBar';
import Copyright from './Copyright';
// import axios, { AxiosResponse } from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { verifyUser } from '../../global/functions/axios';
// import { Alerts, Tasks, Users } from '../../enums';
// import { GlobalContext } from '../../context/GlobalState';
// import { getToken } from '../../global/functions/helpers';
// import { LoginType, ITask, VerifyType } from '../../global/types/type';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    makeStyles,
} from '@material-ui/core';

// interface LoginResponse {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     jwt: string;
//     refreshToken: string;
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
    // const { state, dispatch } = useContext(GlobalContext);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // useEffect(() => {
    //     (async () => {
    //         const res: AxiosResponse<any> = await verifyUser();
    //         if (res.data.user) setIsLoggedIn(true);
    //     })();
    // }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
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
