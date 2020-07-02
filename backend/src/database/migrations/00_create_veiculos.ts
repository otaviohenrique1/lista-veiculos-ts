import Knex from "knex";

export async function up(knex: Knex) {
    // Cria tabela
    return knex.schema.createTable('veiculos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('paisOrigem').notNullable();
        table.string('tipo').notNullable();
        table.string('imagem').notNullable();
        table.string('fabricante').notNullable();
        table.string('utilizadores').notNullable();
        table.integer('quantidadeProduzida').notNullable();
        table.string('peridoServico').notNullable();
        table.float('massa').notNullable();
        table.float('comprimento').notNullable();
        table.float('altura').notNullable();
        table.float('largura').notNullable();
        table.integer('tripulacao').notNullable();
        table.float('custoUnitario').notNullable();
        table.string('armamento').notNullable();
    });
}

export async function down(knex: Knex) {
    // voltar atras (Deletar tabela)
    return knex.schema.dropTable('veiculos');
}