const { Model, Sequelize } = require('sequelize');

const membersSchema = (DataTypes) => ({
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
  organizationId: {
    type: DataTypes.INTEGER,
    field: 'organization_id',
    allowNull: false,
    references: {
      model: 'organizations',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Organization, { as: 'organization' });
    }
  }
  Member.init(membersSchema(DataTypes), {
    sequelize,
    modelName: 'Member',
    tableName: 'members',
    timestamps: false,
  });
  return Member;
};
