import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm';

import Company from './Company';

@Entity('versions_files_companies')
class VersionFileCompany {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Company, company => company.versionfilecompany, {
    eager: true,
  })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  company_id: string;

  @Column()
  name_file: string;

  @Column()
  name_version: string;

  @Column()
  version_date: Date;

  @Column()
  compilation_date: Date;

  @Column()
  review: number;

  @Column()
  review_index: number;

  @Column()
  authorized_update: boolean;

  @Column()
  status_update: string;

  @Column()
  id_version_update: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default VersionFileCompany;
