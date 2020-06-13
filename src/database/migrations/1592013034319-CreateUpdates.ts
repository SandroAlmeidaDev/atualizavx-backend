import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateUpdates1592013034319 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'updates',
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
            name: 'system_name',
            type: 'varchar',
          },
          {
            name: 'update_date',
            type: 'date',
          },
          {
            name: 'name_version',
            type: 'varchar',
          },
          {
            name: 'compilation_date',
            type: 'date',
          },
          {
            name: 'compiler',
            type: 'varchar',
          },
          {
            name: 'operational_system',
            type: 'varchar',
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
      'updates',
      new TableForeignKey({
        name: 'UpdatesCompanies',
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('updates');
  }
}
