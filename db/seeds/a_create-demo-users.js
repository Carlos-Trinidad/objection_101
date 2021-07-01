exports.seed = async function createDemoUsers(knex) {
  const defaultPassword = '123456789';
  const defaultGroup = 'objection_101';
  return knex('user')
    .del()
    .then(() => knex('user').insert([
      {
        id: 1,
        name: 'Reynaldo Rodriguez',
        email: 'rrodriguez@vairix.com',
        password: defaultPassword,
        role: 'admin',
        group: defaultGroup,
      },
      {
        id: 2,
        name: 'Sebastian Lagomarsino',
        email: 'slagomarsino@vairix.com',
        password: defaultPassword,
        role: 'admin',
        group: defaultGroup,
      },
      {
        id: 3,
        name: 'Romina Rodriguez',
        email: 'rrodriguez+user@vairix.com',
        password: defaultPassword,
        role: 'user',
        group: defaultGroup,
      },
      {
        id: 4,
        name: 'Ramona Rodriguez',
        email: 'rrodriguez+1@vairix.com',
        password: defaultPassword,
        role: 'user',
        group: defaultGroup,
      },
      {
        id: 5,
        name: 'Rodrigo Rodriguez',
        email: 'rrodriguez+2@vairix.com',
        password: defaultPassword,
        role: 'user',
        group: defaultGroup,
      }
    ]));
};
