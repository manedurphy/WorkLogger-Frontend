import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';

const App = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path={'/'} component={Dashboard} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/login'} component={Login} />
        </Switch>
    );
};

export default App;
