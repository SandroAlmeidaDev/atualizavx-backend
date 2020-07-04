import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateVersionsFilesCompanies1593821375737
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'versions_files_companies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'company_id',
            type: 'uuid',
          },
          {
            name: 'name_file',
            type: 'varchar',
          },
          {
            name: 'name_version',
            type: 'varchar',
          },
          {
            name: 'version_date',
            type: 'date',
          },
          {
            name: 'compilation_date',
            type: 'date',
          },
          {
            name: 'review',
            type: 'numeric',
          },
          {
            name: 'review_index',
            type: 'numeric',
          },
          {
            name: 'authorized_update',
            type: 'boolean',
            default: false,
          },
          {
            name: 'status_update',
            type: 'varchar',
          },
          {
            name: 'id_version_update',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'versions_files_companies',
      new TableForeignKey({
        name: 'VersionsFilesCompany',
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('versions_files_companies');
  }
}
