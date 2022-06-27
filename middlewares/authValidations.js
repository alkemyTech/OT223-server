const { check } = require('express-validator');
const validateFields = require('./validateFields');

const loginValidation = () => ([
  check('email', 'El correo electrónico es obligatorio').not().isEmpty(),
  check('email', 'Correo electrónico no valido').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validateFields,
]);

module.exports = {
  loginValidation,
};
