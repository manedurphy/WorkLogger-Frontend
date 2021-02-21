import React from 'react';
import DrawerComponent from '../DrawerComponent';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { setDrawer } from '../../../redux/slices/drawer/drawerSlice';

describe('Drawer components', () => {
    test('should not be in the document unless state is true in the store', () => {
        const { queryByText } = render(
            <Provider store={store}>
                <DrawerComponent />
            </Provider>,
        );

        expect(queryByText('Work Logger')).not.toBeInTheDocument();
        expect(queryByText('Current tasks')).not.toBeInTheDocument();
        expect(queryByText('Archive')).not.toBeInTheDocument();
    });

    test('should be in the document and visible if state is true in the store', () => {
        store.dispatch(setDrawer(true));

        const { getByText } = render(
            <Provider store={store}>
                <DrawerComponent />
            </Provider>,
        );

        expect(getByText('Work Logger')).toBeInTheDocument();
        expect(getByText('Current tasks')).toBeInTheDocument();
        expect(getByText('Archive')).toBeInTheDocument();

        expect(getByText('Work Logger')).toBeVisible();
        expect(getByText('Current tasks')).toBeVisible();
        expect(getByText('Archive')).toBeVisible();
    });

    test('clicking on Archive when state showCompleted state is false should set it to true as well as take the drawer out of the doument', () => {
        const { getByText, queryByText } = render(
            <Provider store={store}>
                <DrawerComponent />
            </Provider>,
        );

        expect(getByText('Work Logger')).toBeInTheDocument();
        expect(getByText('Current tasks')).toBeInTheDocument();
        expect(getByText('Archive')).toBeInTheDocument();

        const archiveBtn = getByText('Archive');
        fireEvent.click(archiveBtn);

        expect(queryByText('Work Logger')).not.toBeInTheDocument();
        expect(queryByText('Current tasks')).not.toBeInTheDocument();
        expect(queryByText('Archive')).not.toBeInTheDocument();
        expect(store.getState().drawer.open).toBe(false);
    });
});
