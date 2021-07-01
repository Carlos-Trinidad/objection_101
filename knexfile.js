module.exports = {
    client: 'postgresql',
    connection: {
      user: "ctrinidad",
      password: "",
      database: "objection_101",
      host: "localhost",
      port: "5432",
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  };