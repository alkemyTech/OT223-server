const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const config = require(`${__dirname}/../config/config`).development;
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config, {
  host: config.host,
  dialect: config.dialect,
});

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.models = {};
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = db;
