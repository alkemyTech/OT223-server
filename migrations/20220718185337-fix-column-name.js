module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('organizations', 'adress', 'address');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('organizations', 'address', 'adress');
  },
};
