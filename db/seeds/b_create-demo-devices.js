exports.seed = async function createDemoDevices(knex) {
  const defaultToken = 'hash12345abcde:objection_101';
  return knex('device')
    .del()
    .then(() => knex('device').insert([
      {
        id: 1,
        name: 'Laptop Windows',
        token: defaultToken,
        user_id: 1
      },
      {
        id: 2,
        name: 'Laptop Mac',
        token: defaultToken,
        user_id: 1
      },
      {
        id: 3,
        name: 'Telefono Android',
        token: defaultToken,
        user_id: 1
      },
      {
        id: 4,
        name: 'Laptop Mac',
        token: defaultToken,
        user_id: 2
      },
      {
        id: 5,
        name: 'Telefono IOS',
        token: defaultToken,
        user_id: 2
      },
      {
        id: 6,
        name: 'Telefono Android',
        token: defaultToken,
        user_id: 3
      },
      {
        id: 7,
        name: 'Laptop Mac',
        token: defaultToken,
        user_id: 3
      },
      {
        id: 8,
        name: 'Laptop Mac',
        token: defaultToken,
        user_id: 4
      },
      {
        id: 9,
        name: 'Laptop Windows',
        token: defaultToken,
        user_id: 4
      },
      {
        id: 10,
        name: 'Telefono Android',
        token: defaultToken,
        user_id: 4
      },
      {
        id: 11,
        name: 'Telefono Android 2',
        token: defaultToken,
        user_id: 4
      },
      {
        id: 12,
        name: 'Telefono IOS',
        token: defaultToken,
        user_id: 4
      },
      {
        id: 13,
        name: 'Laptop Mac',
        token: defaultToken,
        user_id: 5
      },
    ]));
};
