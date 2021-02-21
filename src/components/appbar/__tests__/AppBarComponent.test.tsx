import React from 'react';
import AppBarComponent from '../AppBarComponent';
import { store } from '../../../redux/store';
import { mockData } from '../../../mocks/mockData';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setIncompleteTasks } from '../../../redux/slices/tasks/tasksSlice';

describe('Appbar components', () => {
    store.dispatch(setIncompleteTasks(mockData));
    test('should display logout and close buttons when logout icon is clicked', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <AppBarComponent />
            </Provider>,
        );

        const logout = getByText('Logout');
        const close = getByText('Close');

        expect(logout).toBeInTheDocument();
        expect(close).toBeInTheDocument();

        expect(logout).not.toBeVisible();
        expect(close).not.toBeVisible();

        const logoutBtn = getByTestId('logout-btn');
        fireEvent.click(logoutBtn);

        expect(logout).toBeVisible();
        expect(close).toBeVisible();
    });

    test('burger should set the state of the drawer in the store', () => {
        expect(store.getState().drawer.open).toBe(false);

        const { getByLabelText } = render(
            <Provider store={store}>
                <AppBarComponent />
            </Provider>,
        );

        const burger = getByLabelText('open drawer');
        fireEvent.click(burger);

        expect(store.getState().drawer.open).toBe(true);
    });

    test('Search bar input should set the state of search in the store', () => {
        expect(store.getState().tasks.search).toBe('');

        const { getByLabelText } = render(
            <Provider store={store}>
                <AppBarComponent />
            </Provider>,
        );

        const searchinput = getByLabelText('search');
        fireEvent.change(searchinput, { target: { value: 'Task 4' } });

        expect(store.getState().tasks.search).toBe('Task 4');
    });
});
