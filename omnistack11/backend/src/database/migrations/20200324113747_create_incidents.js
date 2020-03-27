// Criar a tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      // Cria relacionamento
      table.string('ong_id').notNullable();
      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
// Deletar a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
  