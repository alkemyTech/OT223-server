const bcryptjs = require('bcryptjs');
const generateJWT = require('../helpers/jwt');
const models = require('../models');
const messages = require('../constant/messages.json');

const STANDARD_USER_ROLE = 'Standard';

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await models.User.findOne({
    where: { email },
    include: ['role'],
  });
  if (!user) {
    return res.status(401).json({ message: messages.errors.noAuthenticated });
  }

  // Validate password
  const validPassword = bcryptjs.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: messages.errors.noAuthenticated });
  }

  // Generate token
  const token = await generateJWT(user);
  console.log(user);
  return res.status(200).json({
    data: {
      token,
      isAdmin: user.role.dataValues.name === 'Admin',
    },
  });
};

// register
const register = async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: messages.errors.noAuthenticated, data: null });
  }

  // encrypt password
  const hashedPassword = await bcryptjs.hashSync(password, 10);

  // email validation, not repeated user
  const user = await models.User.findOne({ where: { email } });
  if (user) {
    throw new Error(messages.errors.userExists);
  }

  const standardUserRole = await models.Role.findOne({
    where: {
      name: STANDARD_USER_ROLE,
    },
  });

  if (!standardUserRole) {
    throw new Error(messages.errors.unexpected);
  }

  // create user and store in the database
  const newUser = await models.User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    roleId: standardUserRole.dataValues.id,
  });

  return res.status(201).json(newUser);
};

module.exports = {
  login,
  register,
};
