import React from 'react';
import Authenticated from '../Authenticated';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { setUser } from '../../redux/slices/users/usersSlice';
import { mockUserState } from '../../mocks/mockData';

let renderResult: RenderResult;

beforeAll(() => {
    store.dispatch(setUser(mockUserState));
    const result = render(
        <Router>
            <Provider store={store}>
                <Authenticated />
            </Provider>
        </Router>,
    );
    renderResult = result;
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

    test('add button should bring the "create new task form on screen"', async () => {
        const addBtn = renderResult.container.querySelector('#add-btn');

        expect(screen.queryByText('Create New Task')).not.toBeInTheDocument();
        if (addBtn) fireEvent.click(addBtn);

        console.log('ADD BTN', addBtn);

        expect(await screen.findByText('Create')).toBeInTheDocument();
    });
});
