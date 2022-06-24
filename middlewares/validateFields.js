const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Los campos no son válidos',
      errors: errors.mapped(),
    });
  }
  next();
};

module.exports = validateFields;
