import { Router } from 'express';

import CreateUdateService from '../services/CreateUpdateService';

const updatesRouter = Router();

updatesRouter.post('/', async (request, response) => {
  const {
    company_id,
    system_name,
    update_date,
    name_version,
    compiler,
    operational_system,
    compilation_date,
    review,
    review_index,
  } = request.body;

  const createUpdate = new CreateUdateService();

  const update = await createUpdate.execute({
    company_id,
    system_name,
    update_date,
    name_version,
    compiler,
    operational_system,
    compilation_date,
    review,
    review_index,
  });

  return response.json(update);
});

export default updatesRouter;
