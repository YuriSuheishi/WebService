import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemon1616016589705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pokes",
                columns: [{
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },{
                    name: "name",
                    type: "varchar",
                },],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokes")
    }

}