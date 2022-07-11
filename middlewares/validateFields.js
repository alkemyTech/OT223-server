const { validationResult } = require('express-validator');
const messages = require('../constant/messages.json');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: messages.errors.invalidFields,
      errors: errors.mapped(),
    });
  }
  next();
};

module.exports = validateFields;
