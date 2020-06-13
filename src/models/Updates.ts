import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Company from './Company';

@Entity('companies')
class Update {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, company => company.update, { eager: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  company_id: string;

  @Column()
  system_name: string;

  @Column()
  update_date: Date;

  @Column()
  name_version: string;

  @Column()
  compiler: string;

  @Column()
  operational_system: string;

  @Column()
  compilation_date: string;

  @Column()
  review: number;

  @Column()
  review_index: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Update;
