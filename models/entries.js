const { Model, Sequelize } = require('sequelize');

const entriesSchema = (DataTypes) => ({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  categoryId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { as: 'category' });
    }
  }
  Entry.init(entriesSchema(DataTypes), {
    sequelize,
    modelName: 'Entry',
    tableName: 'entries',
    timestamps: false,
  });
  return Entry;
};
