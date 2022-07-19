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
        type: Sequelize.DataTypes.TEXT,
        field: 'welcome_text',
      },
      address: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      instagram: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      facebook: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      linkedin: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(TABLE_NAME);
  },
};
