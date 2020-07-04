import { getRepository } from 'typeorm';
import VersionFileCompany from '../models/VersionFileCompany';

interface Request {
  company_id: string;
  name_file: string;
  name_version: string;
  version_date: Date;
  compilation_date: Date;
  review: number;
  review_index: number;
  authorized_update: boolean;
  status_update: string;
  id_version_update: string;
}

class CreateVersionFileCompanyService {
  public async execute({
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
  }: Request): Promise<VersionFileCompany> {
    const versionsFilesCompnaiesRepository = getRepository(VersionFileCompany);

    const versionFileCompany = versionsFilesCompnaiesRepository.create({
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

    await versionsFilesCompnaiesRepository.save(versionFileCompany);

    return versionFileCompany;
  }
}

export default CreateVersionFileCompanyService;
