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
  public async getUpdates(): Promise<UpdateControl> {
    const updates = await this.find({ where: { review: 217521 } });

    return { update_date };
  }
}

export default UpdateRepository;
