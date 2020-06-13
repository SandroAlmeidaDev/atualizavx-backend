import { EntityRepository, Repository } from 'typeorm';

import Update from '../models/Update';

interface UpdateControl {
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

@EntityRepository(Update)
class UpdateRepository extends Repository<Update> {
  public async getUpdate(): Promise<UpdateControl> {}
}

export default UpdateRepository;
