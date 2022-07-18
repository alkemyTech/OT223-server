module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('organizations', 'createdAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    });
    await queryInterface.addColumn('organizations', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('organizations', 'createdAt');
    await queryInterface.removeColumn('organizations', 'updatedAt');
  },
};
