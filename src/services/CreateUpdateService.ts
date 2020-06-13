import { getRepository } from 'typeorm';
import Update from '../models/Updates';

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
    const updatesRepository = getRepository(Update);

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
