const { Model, Sequelize } = require('sequelize');

const contactSchema = (DataTypes) => ({
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
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Contact.init(contactSchema(DataTypes), {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts',
    timestamps: false,
  });
  return Contact;
};
