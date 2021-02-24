import React, { Suspense, lazy } from 'react';
import Spinner from './components/ui/Spinner';
import SnackBarComponent from './components/ui/SnackBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IAlert } from './redux/slices/alerts/types';
import { ILoadedAppProps } from './components/types';
import { useSelector } from 'react-redux';
import { getUserState } from './redux/slices/users/usersSlice';

const Dashboard = lazy(() => import('./components/pages/Dashboard'));
const Verify = lazy(() => import('./components/authentication/verify/Verify'));
const Archive = lazy(() => import('./components/pages/Archive'));
const Register = lazy(() => import('./components/authentication/register/Register'));
const Login = lazy(() => import('./components/authentication/login/Login'));

const AuthenticatedApp = (): JSX.Element => (
    <Switch>
        <Route exact path={'/'} component={Dashboard} />
        <Route exact path={'/archive'} component={Archive} />
        <Redirect to={'/'} />
    </Switch>
);

const UnauthenticatedApp = (): JSX.Element => (
    <Switch>
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/verify/:hash'} component={Verify} />
        <Redirect to={'/login'} />
    </Switch>
);

const LoadedApp: React.FC<ILoadedAppProps> = ({ alerts }): JSX.Element => {
    const { firstName, loading } = useSelector(getUserState);
    return (
        <Suspense fallback={null}>
            <Router>{loading ? <Spinner /> : !firstName ? <UnauthenticatedApp /> : <AuthenticatedApp />}</Router>
            {alerts.map((alert: IAlert, i: number) => (
                <SnackBarComponent
                    key={i}
                    message={alert.message}
                    type={alert.type}
                    anchor={{ vertical: 'bottom', horizontal: 'center' }}
                />
            ))}
        </Suspense>
    );
};

export default LoadedApp;
