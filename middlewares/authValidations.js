const { check, body } = require('express-validator');
const validateFields = require('./validateFields');
const messages = require('../constant/messages.json');

const loginValidation = () => ([
  check('email', messages.errors.noEmail).not().isEmpty(),
  check('email', messages.errors.invalidEmail).isEmail(),
  check('password', messages.errors.noPassword).not().isEmpty(),
  validateFields,
]);

const registerValidation = () => ([
  body('firstName', messages.errors.noName)
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
  body('lastName', messages.errors.noLastName)
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
  body('email', messages.errors.invalidEmail).exists().isEmail(),
  body('password', messages.errors.passwordRequirements).exists().isLength({ min: 5 }),
  body('repeatPassword', messages.errors.unMatchedPassword).custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error();
    }
    return true;
  }),
  validateFields,
]);

module.exports = {
  loginValidation,
  registerValidation,
};
