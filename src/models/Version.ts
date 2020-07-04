import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import VersionFile from './VersionFile';

@Entity('versions')
class Version {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => VersionFile, versionfile => versionfile.version)
  versionfile: VersionFile;

  @Column()
  versao: string;

  @Column()
  dataVersao: Date;

  @Column()
  revisao: number;

  @Column()
  revisaoIndicesTabelas: number;

  @Column()
  dataCompilacao: Date;

  @Column()
  horaCompilacao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Version;
