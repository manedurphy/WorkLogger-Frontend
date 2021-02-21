import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddHoursModal from '../AddHoursModal';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { setAddHoursModal } from '../../../redux/slices/modals/modalsSlice';

describe('Add Hours Modal Behavior', () => {
    test('should render', (done) => {
        store.dispatch(setAddHoursModal(1));
        const { getByText } = render(
            <Provider store={store}>
                <AddHoursModal />
            </Provider>,
        );

        const header = getByText('How many hours did you work today?');
        expect(header).toBeInTheDocument;

        const cancelBtn = getByText('Cancel');
        fireEvent.click(cancelBtn);
        setTimeout(() => {
            expect(header).not.toBeInTheDocument();
            done();
        }, 500);
    });

    test('have input fields where use can enter number of hours worked', () => {
        store.dispatch(setAddHoursModal(1));
        const { getByLabelText } = render(
            <Provider store={store}>
                <AddHoursModal />
            </Provider>,
        );

        const input = getByLabelText('add-hours') as HTMLInputElement;
        fireEvent.change(input, { target: { value: '5.32' } });
        expect(input.value).toBe('5.32');
    });
});
