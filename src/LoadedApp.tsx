import React, { Fragment } from 'react';
import Dashboard from './components/pages/Dashboard';
import Archive from './components/pages/Archive';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import SnackBarComponent from './components/ui/SnackBar';
import Layout from './components/pages/common/Layout';
import Verify from './components/authentication/verify/Verify';
import { Route, Switch } from 'react-router-dom';
import { IAlert } from './redux/slices/alerts/types';

interface ILoadedAppProps {
    alerts: IAlert[];
}

const LoadedApp: React.FC<ILoadedAppProps> = ({ alerts }): JSX.Element => (
    <Fragment>
        <Switch>
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/verify/:hash'} component={Verify} />
            <Layout>
                <Route exact path={'/'} component={Dashboard} />
                <Route exact path={'/archive'} component={Archive} />
            </Layout>
        </Switch>
        {alerts.map((alert: IAlert, i: number) => (
            <SnackBarComponent
                key={i}
                message={alert.message}
                type={alert.type}
                anchor={{ vertical: 'bottom', horizontal: 'center' }}
            />
        ))}
    </Fragment>
);

export default LoadedApp;
