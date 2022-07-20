const models = require('../models');
const messages = require('../constant/messages.json');

const ADMIN_USER_ROLE = 'Admin';

const validateAdminUser = async (req, res, next) => {
  const { data } = req;
  const adminUserRole = await models.Role.findOne({
    where: {
      name: ADMIN_USER_ROLE,
    },
  });

  if (!adminUserRole) {
    return res.status(500).json(messages.errors.unexpected);
  }

  const userIsAdmin = data?.roleId === adminUserRole.dataValues.id;

  if (!userIsAdmin) {
    return res.status(401).json(messages.errors.unauthorized);
  }

  next();
};

module.exports = validateAdminUser;
