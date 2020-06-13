import { getRepository } from 'typeorm';
import Version from '../models/Version';

import AppError from '../errors/AppError';

interface Request {
  versao: string;
  dataVersao: Date;
  revisao: number;
  revisaoIndicesTabelas: number;
  dataCompilacao: Date;
  horaCompilacao: string;
}

class CreateVersionService {
  public async execute({
    versao,
    dataVersao,
    revisao,
    revisaoIndicesTabelas,
    dataCompilacao,
    horaCompilacao,
  }: Request): Promise<Version> {
    const versionsRepository = getRepository(Version);

    const checkRevisaoExists = await versionsRepository.findOne({
      where: { revisao, versao },
    });

    if (checkRevisaoExists) {
      throw new AppError('Review already exists');
    }

    const version = versionsRepository.create({
      versao,
      dataVersao,
      revisao,
      revisaoIndicesTabelas,
      dataCompilacao,
      horaCompilacao,
    });

    await versionsRepository.save(version);

    return version;
  }
}

export default CreateVersionService;
