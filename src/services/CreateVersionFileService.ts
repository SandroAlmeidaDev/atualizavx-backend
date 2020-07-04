import { getRepository } from 'typeorm';

import VersionFile from '../models/VersionFile';

// import AppError from '../errors/AppError';

interface Request {
  version_id: string;
  name: string;
  size: string;
  md5: string;
  url: string;
}

class CreateVersionFileService {
  public async execute({
    version_id,
    name,
    size,
    md5,
    url,
  }: Request): Promise<VersionFile> {
    const versionsFilesRepository = getRepository(VersionFile);

    const versionFile = versionsFilesRepository.create({
      version_id,
      name,
      size,
      md5,
      url,
    });

    await versionsFilesRepository.save(versionFile);

    return versionFile;
  }
}

export default CreateVersionFileService;
