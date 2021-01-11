import React, { useEffect } from 'react';
import Spinner from './components/ui/Spinner';
import Dashboard from './components/Dashboard';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import { getUserState, verifyUser } from './redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const user = useSelector(getUserState);
    useEffect(() => {
        dispatch(verifyUser());
    }, []);

    return user.loading ? (
        <Spinner />
    ) : (
        <Switch>
            <Route exact path={'/'} component={Dashboard} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/login'} component={Login} />
        </Switch>
    );
};

export default App;
