import React, { Suspense, lazy } from 'react';
import Spinner from './components/ui/Spinner';
import SnackBarComponent from './components/ui/SnackBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { IAlert } from './redux/slices/alerts/types';
import { ILoadedAppProps } from './components/types';
import { useSelector } from 'react-redux';
import { getUserState } from './redux/slices/users/usersSlice';

const Authenticated = lazy(() => import('./app/Authenticated'));
const Unauthenticated = lazy(() => import('./app/Unauthenticated'));

const LoadedApp: React.FC<ILoadedAppProps> = ({ alerts }): JSX.Element => {
    const { firstName, loading } = useSelector(getUserState);

    return (
        <Suspense fallback={null}>
            <Router>{loading ? <Spinner /> : !firstName ? <Unauthenticated /> : <Authenticated />}</Router>

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
