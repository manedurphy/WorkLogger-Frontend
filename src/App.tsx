import React, { useEffect } from 'react';
import LoadedApp from './LoadedApp';
import { verifyUser } from './redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IGlobalState } from './redux/types';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const { alerts } = useSelector((state: IGlobalState) => state);

    useEffect(() => {
        const getStatus = () => dispatch(verifyUser());
        getStatus();

        const statusInterval = setInterval(() => getStatus(), 300000);
        return () => clearInterval(statusInterval);
    }, []);

    return <LoadedApp alerts={alerts} />;
};

export default App;
