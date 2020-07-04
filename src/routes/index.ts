import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import companiesRouter from './companies.routes';
import updatesRouter from './updates.routes';
import versionsRouter from './versions.routes';
import versionsFilesRouter from './versionsFiles.routes';
import versionsFilesCompaniesRouter from './versionsFilesCompanies.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/companies', companiesRouter);
routes.use('/updates', updatesRouter);
routes.use('/versions', versionsRouter);
routes.use('/versions/files', versionsFilesRouter);
routes.use('/versions/files/companies', versionsFilesCompaniesRouter);

export default routes;
