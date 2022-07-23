const bcryptjs = require('bcryptjs');

const encryptPassword = () => {
  const password = 'admin password';
  return bcryptjs.hashSync(password, 10);
};

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Usuario',
        lastName: 'Demo',
        email: 'test@test.com',
        // Important: Password not encrypted yet!
        password: '1234',
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date(),
      },
      {
        firstName: 'Admin',
        lastName: 'Demo',
        email: 'test@admin.com',
        password: encryptPassword(),
        roleId: 1,
        image: 'https://visualpharm.com/assets/314/Admin-595b40b65ba036ed117d36fe.svg',
        createdAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
