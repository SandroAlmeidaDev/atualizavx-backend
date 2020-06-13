import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import companiesRouter from './company.routes';
import updatesRouter from './update.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/companies', companiesRouter);
routes.use('/updates', updatesRouter);

export default routes;
