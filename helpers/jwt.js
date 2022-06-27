const jwt = require('jsonwebtoken');

const generateJWT = async ({
  firstName, lastName, email, image, roleId,
}) => {
  const payload = {
    firstName, lastName, email, image, roleId,
  };
  try {
    const token = await jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
    );
    return token;
  } catch (error) {
    return new Error('No se pudo generar el token. Por favor, intente nuevamente');
  }
};

module.exports = generateJWT;
