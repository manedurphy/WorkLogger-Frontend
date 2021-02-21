import React from 'react';
import NewTaskForm from '../task/NewTaskForm';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

describe('NewTaskForm behavior', () => {
    test('should not show unless state set true in store', async () => {
        const { findByText, queryByText } = render(
            <Provider store={store}>
                <NewTaskForm />
            </Provider>,
        );

        expect(queryByText('Create New Task')).not.toBeInTheDocument();
        store.dispatch(setShowCreateNewTaskForm(true));
        expect(await findByText('Create New Task')).toBeInTheDocument();
    });

    test('user should be able to input all fields, and the form should exit on submit', (done) => {
        const { getByLabelText, getByText, queryByText } = render(
            <Provider store={store}>
                <NewTaskForm />
            </Provider>,
        );
        const name = getByLabelText('name') as HTMLInputElement;
        const projectNumber = getByLabelText('projectNumber') as HTMLInputElement;
        const hoursAvailableToWork = getByLabelText('hoursAvailableToWork') as HTMLInputElement;
        const hoursWorked = getByLabelText('hoursWorked') as HTMLInputElement;
        const reviewHours = getByLabelText('reviewHours') as HTMLInputElement;
        const hoursRequiredByBim = getByLabelText('hoursRequiredByBim') as HTMLInputElement;
        const notes = getByLabelText('notes') as HTMLInputElement;
        const dateAssigned = getByLabelText('dateAssigned') as HTMLInputElement;
        const dueDate = getByLabelText('dueDate') as HTMLInputElement;

        fireEvent.change(name, { target: { value: 'New Task' } });
        expect(name.value).toBe('New Task');

        fireEvent.change(projectNumber, { target: { value: 1 } });
        expect(projectNumber.value).toBe('1');

        fireEvent.change(hoursAvailableToWork, { target: { value: 100 } });
        expect(hoursAvailableToWork.value).toBe('100');

        fireEvent.change(hoursWorked, { target: { value: 10 } });
        expect(hoursWorked.value).toBe('10');

        expect(reviewHours.value).toBe('0');
        expect(hoursRequiredByBim.value).toBe('0');

        fireEvent.change(notes, { target: { value: 'Here are some notes' } });
        expect(notes.value).toBe('Here are some notes');

        fireEvent.change(dateAssigned, { target: { value: '2021-02-23' } });
        expect(dateAssigned.value).toBe('2021-02-23');

        fireEvent.change(dueDate, { target: { value: '2021-03-23' } });
        expect(dueDate.value).toBe('2021-03-23');

        const submitBtn = getByText('Submit');
        fireEvent.click(submitBtn);

        setTimeout(() => {
            expect(queryByText('Create New Task')).not.toBeInTheDocument();
            done();
        }, 1500);
    });
});
