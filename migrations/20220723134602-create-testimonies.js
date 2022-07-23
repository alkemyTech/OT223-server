const TABLE_NAME = 'testimonies';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
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
        type: Sequelize.DataTypes.TEXT,
      },
      content: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
