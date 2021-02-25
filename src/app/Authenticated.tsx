import React, { Fragment } from 'react';
import Dashboard from '../components/pages/Dashboard';
import Archive from '../components/pages/Archive';
import Layout from '../components/pages/common/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';

const Authenticated = (): JSX.Element => (
    <Fragment>
        <Layout />
        <Switch>
            <Route exact path={'/archive'} component={Archive} />
            <Route exact path={'/'} component={Dashboard} />
            <Redirect to={'/'} />
        </Switch>
    </Fragment>
);

export default Authenticated;
