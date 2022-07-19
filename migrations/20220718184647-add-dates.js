module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('organizations', 'createdAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('organizations', 'createdAt');
  },
};
