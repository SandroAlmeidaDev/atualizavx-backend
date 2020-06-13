import { getRepository } from 'typeorm';
import Update from '../models/Update';
import Company from '../models/Company';

import AppError from '../errors/AppError';

interface Request {
  company_id: string;
  system_name: string;
  update_date: Date;
  name_version: string;
  compiler: string;
  operational_system: string;
  compilation_date: string;
  review: number;
  review_index: number;
}

class CreateUpdateService {
  public async execute({
    company_id,
    system_name,
    update_date,
    name_version,
    compiler,
    operational_system,
    compilation_date,
    review,
    review_index,
  }: Request): Promise<Update> {
    const companyRepository = getRepository(Company);
    const updatesRepository = getRepository(Update);

    const checkCompanyExists = await companyRepository.findOne({
      where: { id: company_id },
    });

    if (!checkCompanyExists) {
      throw new AppError('Unregistered company id', 400);
    }

    const update = updatesRepository.create({
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

    await updatesRepository.save(update);

    return update;
  }
}

export default CreateUpdateService;
