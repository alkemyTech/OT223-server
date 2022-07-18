const TABLE_NAME = 'Users';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn(TABLE_NAME, 'email', {
      type: Sequelize.DataTypes.STRING,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn(TABLE_NAME, 'email', {
      type: Sequelize.DataTypes.STRING,
      unique: false,
    });
  },
};
