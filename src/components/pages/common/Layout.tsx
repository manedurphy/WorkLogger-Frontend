import React, { Fragment } from 'react';
import Modal from '../../modal/Modal';
import DrawerComponent from '../../drawer/DrawerComponent';
import AppBarComponent from '../../appbar/AppBarComponent';

const Layout = (): JSX.Element => (
    <Fragment>
        <Modal />
        <AppBarComponent />
        <DrawerComponent />
    </Fragment>
);

export default Layout;
