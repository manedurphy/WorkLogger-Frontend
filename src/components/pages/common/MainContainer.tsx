import React from 'react';
import Layout from './Layout';
// import { Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAuthState } from '../../../redux/slices/auth/authSlice';
import { MainContainerProps } from '../types';

const MainContainer: React.FC<MainContainerProps> = ({ children }): JSX.Element => {
    // const { loginSuccess } = useSelector(getAuthState);
    return (
        <Layout>
            <main>
                {children}
                {/* {!loginSuccess && <Redirect to={'/login'} />} */}
            </main>
        </Layout>
    );
};

export default MainContainer;
