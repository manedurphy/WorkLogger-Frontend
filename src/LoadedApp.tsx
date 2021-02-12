import React from 'react';
import Dashboard from './components/Dashboard';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import SnackBarComponent from './components/ui/SnackBar';
import { Route, Switch } from 'react-router-dom';
import { IAlert } from './redux/slices/alerts/types';

interface ILoadedAppProps {
    alerts: IAlert[];
}

const LoadedApp: React.FC<ILoadedAppProps> = (props): JSX.Element => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={'/'} component={Dashboard} />
                <Route exact path={'/register'} component={Register} />
                <Route exact path={'/login'} component={Login} />
            </Switch>
            {props.alerts.map((alert: IAlert, i: number) => (
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

export default LoadedApp;
