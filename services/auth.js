const bcryptjs = require('bcryptjs');
const generateJWT = require('../helpers/jwt');
const model = require('../models').User;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await model.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: 'Correo electrónico o contraseña no válidos' });
  }

  // Validate password
  const validPassword = bcryptjs.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Correo electrónico o contraseña no válidos' });
  }

  // Generate token
  const token = await generateJWT(user);

  return res.status(200).json({
    data: {
      token,
    },
  });
};

module.exports = {
  login,
};
