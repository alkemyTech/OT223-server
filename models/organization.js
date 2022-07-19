const { Model, Sequelize } = require('sequelize');

const organizationSchema = (DataTypes) => ({
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
    type: DataTypes.STRING,
  },
  welcomeText: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'welcome_text',
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  instagram: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  facebook: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  linkedin: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Organization.init(organizationSchema(DataTypes), {
    sequelize,
    modelName: 'Organization',
    tableName: 'organizations',
    timestamps: false,
  });
  return Organization;
};
