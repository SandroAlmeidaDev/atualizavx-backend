import { Router } from 'express';

import CreateVersionService from '../services/CreateVersionService';

const versionsRouter = Router();

versionsRouter.post('/', async (request, response) => {
  const {
    versao,
    dataVersao,
    revisao,
    revisaoIndicesTabelas,
    dataCompilacao,
    horaCompilacao,
  } = request.body;

  const createVersion = new CreateVersionService();

  const version = await createVersion.execute({
    versao,
    dataVersao,
    revisao,
    revisaoIndicesTabelas,
    dataCompilacao,
    horaCompilacao,
  });

  return response.json(version);
});

export default versionsRouter;
