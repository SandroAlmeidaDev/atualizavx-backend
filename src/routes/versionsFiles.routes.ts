import { Router } from 'express';

import CreateVersionFileService from '../services/CreateVersionFileService';

const versionsFilesRouter = Router();

versionsFilesRouter.post('/', async (request, response) => {
  const { version_id, name, size, md5, url } = request.body;

  const createVersionFile = new CreateVersionFileService();

  const versionFile = await createVersionFile.execute({
    version_id,
    name,
    size,
    md5,
    url,
  });

  return response.json(versionFile);
});

export default versionsFilesRouter;
