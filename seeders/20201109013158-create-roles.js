module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        description: 'Usuario administrador',
        createdAt: new Date(),
      },
      {
        name: 'Standard',
        description: 'Usuario regular',
        createdAt: new Date(),
      }], {});
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
