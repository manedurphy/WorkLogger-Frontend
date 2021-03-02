import { getWeeklyReport } from '../helpers';
import { mockReportData } from '../../../../mocks/mockData';
import { handleGetReport } from '../reportSlice';
import { store } from '../../../store';

test('should get weekly report as an array of daily reports', async () => {
    const report = await getWeeklyReport();

    expect(report).toEqual(mockReportData);
});

test('should dispatch report data to store', (done) => {
    store.dispatch(handleGetReport());

    setTimeout(() => {
        expect(store.getState().report.showReport).toBe(true);
        expect(store.getState().report.report).toEqual(mockReportData);
        done();
    }, 1000);
});
