import React from 'react';
import Login from '../components/authentication/login/Login';
import Register from '../components/authentication/register/Register';
import Verify from '../components/authentication/verify/Verify';
import { Redirect, Route, Switch } from 'react-router-dom';

const Unauthenticated = (): JSX.Element => (
    <Switch>
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/verify/:hash'} component={Verify} />
        <Redirect to={'/login'} />
    </Switch>
);

export default Unauthenticated;
