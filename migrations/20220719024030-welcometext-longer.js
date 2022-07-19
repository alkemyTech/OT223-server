const TABLE_NAME = 'organizations';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(TABLE_NAME, 'welcome_text', {
      allowNull: false,
      type: Sequelize.DataTypes.TEXT,
      field: 'welcome_text',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(TABLE_NAME, 'welcome_text', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      field: 'welcome_text',
    });
  },
};
