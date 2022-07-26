const { check, body } = require('express-validator');
const validateFields = require('./validateFields');
const messages = require('../constant/messages.json');

const loginValidation = () => ([
  check('email', messages.errors.noEmail).not().isEmpty(),
  check('email', messages.errors.noEmail).not().isEmpty(),
  check('password', messages.errors.noPassword).not().isEmpty(),
  validateFields,
]);

module.exports = {
  loginValidation,
};
