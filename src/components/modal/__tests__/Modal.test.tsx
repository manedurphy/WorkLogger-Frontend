import React from 'react';
import Modal from '../Modal';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { setModal } from '../../../redux/slices/modals/modalsSlice';

describe('Modal behavior', () => {
    test('it should appear on screen with information from the store, and disappear when state is false is set to false by the cancel button', (done) => {
        store.dispatch(setModal({ id: 1, header: 'Here is a modal', command: 'complete' }));
        const { getByText } = render(
            <Provider store={store}>
                <Modal />
            </Provider>,
        );

        const modalHeader = getByText('Here is a modal');
        const cancelBtn = getByText('Cancel');
        const completeBtn = getByText('Yes, complete');
        expect(modalHeader).toBeInTheDocument();
        expect(cancelBtn).toBeInTheDocument();
        expect(completeBtn).toBeInTheDocument();

        fireEvent.click(cancelBtn);

        setTimeout(() => {
            expect(modalHeader).not.toBeInTheDocument();
            done();
        }, 500);
    });
});
