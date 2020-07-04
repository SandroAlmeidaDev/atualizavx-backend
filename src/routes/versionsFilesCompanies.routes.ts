import { Router } from 'express';

import CreateVersionFileCompanyService from '../services/CreateVersionFileCompanyService';

const versionsFilesCompaniesRouter = Router();

versionsFilesCompaniesRouter.post('/', async (request, response) => {
  const {
    company_id,
    name_file,
    name_version,
    version_date,
    compilation_date,
    review,
    review_index,
    authorized_update,
    status_update,
    id_version_update,
  } = request.body;

  const createVersionFileCompany = new CreateVersionFileCompanyService();

  const versionFileCompany = await createVersionFileCompany.execute({
    company_id,
    name_file,
    name_version,
    version_date,
    compilation_date,
    review,
    review_index,
    authorized_update,
    status_update,
    id_version_update,
  });

  return response.json(versionFileCompany);
});

export default versionsFilesCompaniesRouter;
