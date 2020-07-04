import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Version from './Version';

@Entity('versions_files')
class VersionFile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Version, version => version.versionfile, { eager: true })
  @JoinColumn({ name: 'version_id' })
  version: Version;

  @Column()
  version_id: string;

  @Column()
  name: string;

  @Column()
  size: string;

  @Column()
  md5: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default VersionFile;
