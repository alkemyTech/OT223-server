module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameTable('Users', 'users');
    queryInterface.renameTable('Roles', 'roles');
    queryInterface.changeColumn('users', 'roleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameTable('users', 'Users');
    queryInterface.renameTable('roles', 'Roles');
    queryInterface.changeColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
};
