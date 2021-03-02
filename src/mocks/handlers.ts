import { rest } from 'msw';
import { mockData } from './mockData';

const handlers = [
    rest.post('/api/users/login', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                jwt: 'token',
                refreshToken: 'refreshToken',
                id: 1,
                firstName: 'Test',
                lastName: 'User',
                email: 'testuser@test.com',
            }),
        );
    }),
    rest.post('/api/users/register', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message:
                    'User created! Please check your email to verify your account.',
            }),
        );
    }),
    rest.post('/api/tasks', (_req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json({
                message: 'Task created!',
            }),
        );
    }),
    rest.get('/api/tasks/incomplete', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockData));
    }),
    // rest.get('/api/logs/dates', (_req, res, ctx) => {
    //     return res(ctx.status(200), ctx.json(mockReportData));
    // }),
];

export { handlers, rest };
