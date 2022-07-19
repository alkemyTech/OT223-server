const TABLE_NAME = 'organizations';

// const a = {
//   instagram: {
//     allowNull: true,
//     type: DataTypes.STRING,
//   },
//   facebook: {
//     allowNull: true,
//     type: DataTypes.STRING,
//   },
//   linkedid: {
//     allowNull: true,
//     type: DataTypes.STRING,
//   },
// };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE_NAME, 'instagram', {
      allowNull: true,
      defaultValue: '',
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn(TABLE_NAME, 'facebook', {
      allowNull: true,
      defaultValue: '',
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn(TABLE_NAME, 'linkedin', {
      allowNull: true,
      defaultValue: '',
      type: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(TABLE_NAME, 'instagram');
    await queryInterface.removeColumn(TABLE_NAME, 'facebook');
    await queryInterface.removeColumn(TABLE_NAME, 'linkedin');
  },
};
