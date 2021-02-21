import React, { Fragment } from 'react';
import Modal from '../../modal/Modal';
import AppBarComponent from '../../appbar/AppBarComponent';
import DrawerComponent from '../../drawer/DrawerComponent';
import { LayoutProps } from '../types';

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
    <Fragment>
        <Modal />
        <AppBarComponent />
        <DrawerComponent />
        {children}
    </Fragment>
);

export default Layout;
