const jwt = require('jsonwebtoken');
const messages = require('../constant/messages.json');

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: messages.errors.noToken,
    });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.data = data;
  } catch (error) {
    return res.status(401).json({
      message: messages.errors.invalidToken,
    });
  }
  next();
};

module.exports = validateJWT;
