exports.up = (knex) => knex.schema.createTable('user', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();
  
    table
      .string('name')
      .notNullable();
  
    table
      .string('email')
      .notNullable();
  
    table
      .string('password')
      .notNullable();
  
    table
      .string('role')
      .notNullable();
  
    table
      .string('group')
      .notNullable();
  
    table.timestamps(false, true);
  });
  
  exports.down = (knex) => knex.schema.dropTableIfExists('user');
  