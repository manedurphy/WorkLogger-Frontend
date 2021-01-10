import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import { verifyUser } from './redux/slices/users/usersSlice';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(verifyUser());
    }, []);

    return (
        <Switch>
            <Route exact path={'/'} component={Dashboard} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/login'} component={Login} />
        </Switch>
    );
};

export default App;
