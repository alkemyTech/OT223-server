const bcryptjs = require('bcryptjs');
const generateJWT = require('../helpers/jwt');
const model = require('../models').User;
const messages = require('../constant/messages.json');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await model.findOne({ where: { email } });
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

  return res.status(200).json({
    data: {
      token,
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
  const user = await model.findOne({ where: { email } });
  if (user) {
    throw new Error(messages.errors.userExists);
  }

  // create user and store in the database
  const newUser = await model.create({
    firstName, lastName, email, password: hashedPassword,
  });

  return res.status(201).json(newUser);
};

module.exports = {
  login,
  register,
};
