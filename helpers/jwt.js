const jwt = require('jsonwebtoken');

const generateJWT = ({
  firstName, lastName, email, image, roleId,
}) => new Promise((resolve, reject) => {
  const payload = {
    firstName, lastName, email, image, roleId,
  };
  jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    },
    (err, token) => {
      if (err) {
        reject(new Error('No se pudo generar el token. Por favor, intente nuevamente'));
      } else {
        resolve(token);
      }
    },
  );
});

module.exports = generateJWT;
