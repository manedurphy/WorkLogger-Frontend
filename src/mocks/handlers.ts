import { rest } from 'msw';

const handlers = [
    rest.post('http://localhost:5000/api/users/register', (_req, res, ctx) => {
        return res(ctx.status(201), ctx.json({ message: 'User created!', type: 'success' }));
    }),
    rest.post('http://localhost:5000/api/users/login', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: 'User created!', type: 'success' }));
    }),
];

export { handlers, rest };
