import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import Update from './Update';
import VersionFileCompany from './VersionFileCompany';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Update, update => update.company)
  update: Update;

  @ManyToMany(
    () => VersionFileCompany,
    versionfilecompany => versionfilecompany.company,
  )
  versionfilecompany: VersionFileCompany;

  @Column()
  cnpj: number;

  @Column()
  company_code: number;

  @Column()
  state_registration: string;

  @Column()
  comapany_name: string;

  @Column()
  fantasy_name: string;

  @Column()
  adress: string;

  @Column()
  number: string;

  @Column()
  district: string;

  @Column()
  complement: string;

  @Column()
  zip_code: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  commercial_phone: string;

  @Column()
  cell_phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Company;
