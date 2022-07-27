const { Model, Sequelize } = require('sequelize');

const categoriesSchema = (DataTypes) => ({
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Entry, { as: 'entries', foreignKey: 'categoryId' });
    }
  }
  Category.init(categoriesSchema(DataTypes), {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: false,
  });
  return Category;
};
