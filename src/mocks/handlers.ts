import { rest } from 'msw';

const handlers = [
    rest.post('/api/users/register', (_req, res, ctx) => {
        return res(ctx.status(201), ctx.json({ message: 'User created!', type: 'success' }));
    }),
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
                message: 'User created! Please check your email to verify your account.',
            }),
        );
    }),
];

export { handlers, rest };
