import DashboardMainContent from '../DashboardMainContent';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { setUser } from '../../../redux/slices/users/usersSlice';
import { mockUserState } from '../../../mocks/mockData';

beforeAll(() => {
    store.dispatch(setUser(mockUserState));
});

beforeEach(() => {
    render(
        <Provider store={store}>
            <DashboardMainContent />
        </Provider>,
    );
});

test('Incomplete Tasks table should be on the screen', async () => {
    expect(screen.getByText('No tasks at this time. Add one now!')).toBeInTheDocument();
});

test('new task button should expose the create task form', async () => {
    const addBtn = screen.getByText('New Task');
    fireEvent.click(addBtn);

    expect(await screen.findByText('Create New Task')).toBeInTheDocument();
});
