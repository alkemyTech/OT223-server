const TABLE_NAME = 'organizations';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(TABLE_NAME, {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      welcomeText: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: 'welcome_text',
      },
      adress: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(TABLE_NAME);
  },
};
