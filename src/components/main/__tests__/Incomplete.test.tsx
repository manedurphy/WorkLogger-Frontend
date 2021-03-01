import React from 'react';
import IncompleteTasks from '../components/IncompleteTasks';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { setIncompleteTasks } from '../../../redux/slices/tasks/tasksSlice';
import { mockData } from '../../../mocks/mockData';

describe('Incomplete table behavior', () => {
    test('should render', () => {
        const { getByText } = render(
            <Provider store={store}>
                <IncompleteTasks showLog={false} />
            </Provider>,
        );
        expect(getByText('Incomplete Tasks')).toBeInTheDocument();
    });

    test('should display task info when incomplete tasks are in the store', () => {
        store.dispatch(setIncompleteTasks(mockData));
        const { getByText } = render(
            <Provider store={store}>
                <IncompleteTasks showLog={false} />
            </Provider>,
        );

        expect(getByText('Task 4')).toBeInTheDocument();
        expect(getByText('Task 3')).toBeInTheDocument();
        expect(getByText('Task 2')).toBeInTheDocument();
    });

    test('dropdown button should be present on task listing that exposes more information', async () => {
        const { getAllByLabelText, queryByText, findByText, getByText } = render(
            <Provider store={store}>
                <IncompleteTasks showLog={false} />
            </Provider>,
        );

        expect(getByText('Assigned On')).toBeInTheDocument();
        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('Project Number')).toBeInTheDocument();
        expect(getByText('Hours Permitted')).toBeInTheDocument();
        expect(getByText('Hours Worked')).toBeInTheDocument();
        expect(getByText('No. Reviews')).toBeInTheDocument();

        expect(queryByText('Hours for BIM')).not.toBeInTheDocument();
        expect(queryByText('Review Hours')).not.toBeInTheDocument();
        expect(queryByText('Hours Remaining')).not.toBeInTheDocument();
        expect(queryByText('Due Date')).not.toBeInTheDocument();
        expect(queryByText('Notes')).not.toBeInTheDocument();

        expect(queryByText('Edit')).not.toBeInTheDocument();
        expect(queryByText('Delete')).not.toBeInTheDocument();
        expect(queryByText('Complete')).not.toBeInTheDocument();
        expect(queryByText('See Log')).not.toBeInTheDocument();
        expect(queryByText('Add Hours')).not.toBeInTheDocument();

        const showMoreBtns = getAllByLabelText('expand row');
        expect(showMoreBtns[0]).toBeInTheDocument();

        fireEvent.click(showMoreBtns[0]);

        expect(await findByText('Hours for BIM')).toBeInTheDocument();
        expect(await findByText('Review Hours')).toBeInTheDocument();
        expect(await findByText('Hours Remaining')).toBeInTheDocument();
        expect(await findByText('Due Date')).toBeInTheDocument();
        expect(await findByText('Notes')).toBeInTheDocument();

        expect(await findByText('Edit')).toBeInTheDocument();
        expect(await findByText('Delete')).toBeInTheDocument();
        expect(await findByText('Complete')).toBeInTheDocument();
        expect(await findByText('See Log')).toBeInTheDocument();
        expect(await findByText('Add Hours')).toBeInTheDocument();
    });
});
