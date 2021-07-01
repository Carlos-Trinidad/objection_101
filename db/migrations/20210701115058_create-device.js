exports.up = (knex) => knex.schema.createTable('device', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();
  
    table
      .string('name')
      .notNullable();
  
    table
      .string('token')
      .notNullable();
  
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  
    table.timestamps(false, true);
  });
  
  exports.down = (knex) => knex.schema.dropTableIfExists('device');
  