const { body } = require('express-validator');
const validateFields = require('./validateFields');
const messages = require('../constant/messages.json');

const testimonyValidation = () => ([
  body('name', messages.errors.noName)
    .exists()
    .not()
    .isEmpty(),
  body('content', messages.errors.noLastName)
    .exists()
    .not()
    .isEmpty(),
  body('file', messages.errors.noImage).custom((value, { req }) => {
    if (!req.files) {
      throw new Error();
    }
    return true;
  }),
  validateFields,
]);

module.exports = {
  testimonyValidation,
};
