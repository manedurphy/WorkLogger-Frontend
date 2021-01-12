import React, { useEffect } from 'react';
import Spinner from './components/ui/Spinner';
import Dashboard from './components/Dashboard';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import SnackBarComponent from './components/ui/SnackBar';
import { verifyUser } from './redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IGlobalState } from './redux/types';
import { IAlert } from './redux/slices/alerts/types';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const { user, alerts } = useSelector((state: IGlobalState) => state);

    useEffect(() => {
        dispatch(verifyUser());
    }, []);

    return user.loading ? (
        <Spinner />
    ) : (
        <React.Fragment>
            <Switch>
                <Route exact path={'/'} component={Dashboard} />
                <Route exact path={'/register'} component={Register} />
                <Route exact path={'/login'} component={Login} />
            </Switch>
            {alerts.map((alert: IAlert, i: number) => (
                <SnackBarComponent
                    key={i}
                    message={alert.message}
                    type={alert.type}
                    anchor={{ vertical: 'bottom', horizontal: 'center' }}
                />
            ))}
        </React.Fragment>
    );
};

export default App;
