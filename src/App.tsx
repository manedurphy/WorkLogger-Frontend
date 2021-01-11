import React, { useEffect } from 'react';
import Spinner from './components/UI/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login';
import { verifyUser } from './redux/slices/users/usersSlice';
import { IGlobalState } from './redux/types';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: IGlobalState) => state);
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
