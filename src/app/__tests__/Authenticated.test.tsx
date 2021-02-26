import React from 'react';
import Authenticated from '../Authenticated';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { setUser } from '../../redux/slices/users/usersSlice';
import { mockUserState } from '../../mocks/mockData';
import { handleClickAdd } from '../../redux/slices/tasks/tasksSlice';

beforeAll(() => {
    store.dispatch(setUser(mockUserState));
    render(
        <Router>
            <Provider store={store}>
                <Authenticated />
            </Provider>
        </Router>,
    );
});

describe('End to end app flow', () => {
    test('should see "Incomplete Tasks" table on load, as well as the main table properties', () => {
        expect(screen.getByText('Incomplete Tasks')).toBeInTheDocument();
        expect(screen.getByText('Assigned On')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Project Number')).toBeInTheDocument();
        expect(screen.getByText('Hours Permitted')).toBeInTheDocument();
        expect(screen.getByText('Hours Worked')).toBeInTheDocument();
        expect(screen.getByText('No. Reviews')).toBeInTheDocument();
    });

    test('clicking add icon should bring the "create new task form on screen" by dispatch actions to store', async () => {
        store.dispatch(handleClickAdd());
        expect(await screen.findByText('Create')).toBeInTheDocument();
    });
});
