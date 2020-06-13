import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('versions')
class Version {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
