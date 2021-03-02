import React from 'react';
import ReportTable from '../ReportTable';
import IncompleteTasks from '../../../main/components/IncompleteTasks';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

test('clicking see weekly report button should get report data and display the report table', async () => {
    render(
        <Provider store={store}>
            <IncompleteTasks showLog={false} />
            <ReportTable />
        </Provider>,
    );

    const seeReportBtn = screen.getByText('See Weekly Report');

    expect(screen.queryByText('17.20')).not.toBeInTheDocument();
    expect(screen.queryByText('8.00')).not.toBeInTheDocument();

    fireEvent.click(seeReportBtn);

    expect(await screen.findByText('17.20')).toBeInTheDocument();
    expect(await screen.findByText('8.00')).toBeInTheDocument();
});
