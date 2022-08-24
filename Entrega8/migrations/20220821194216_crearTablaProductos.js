/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return (
    knex.schema.createTable('productos', (table) => {
    table.increments('id').primary().notNullable();
    table.string('Nombre', 255).notNullable();
    table.integer('precio').notNullable();

  }), 
  
  knex.schema.createTable('mensajes', (table) => {
    table.increments('id').primary().notNullable();
    table.string('Nombre', 255).notNullable();
    table.string('mensaje', 255).notNullable();
    table.time('created_at').notNullable();
}
)
  
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return (knex.schema.dropTable("productos"),
  knex.schema.dropTable("mensajes")
  )
};
