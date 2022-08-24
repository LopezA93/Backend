/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('productos').del()
  await knex('productos').insert([
    {nombre:"coca", precio:240},
    {nombre:"cerveza", precio:250}
  ]);

  // await knex('mensajes').del()
  // await knex('mensajes').insert([
  //   {id: 1, nombre:"Agustin", mensaje:'hola'},
    
  // ]);


};
