const { Model, Sequelize } = require('sequelize');

const testimonySchema = (DataTypes) => ({
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
  image: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = (sequelize, DataTypes) => {
  class Testimony extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Testimony.init(testimonySchema(DataTypes), {
    sequelize,
    modelName: 'Testimony',
    tableName: 'testimonies',
    timestamps: false,
  });
  return Testimony;
};
