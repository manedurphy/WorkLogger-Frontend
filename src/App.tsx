import React, { useEffect } from 'react';
import Spinner from './components/ui/Spinner';
import LoadedApp from './LoadedApp';
import { verifyUser } from './redux/slices/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IGlobalState } from './redux/types';

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const { user, alerts } = useSelector((state: IGlobalState) => state);

    useEffect(() => {
        dispatch(verifyUser());
    }, []);

    return user.loading ? <Spinner /> : <LoadedApp alerts={alerts} />;
};

export default App;
