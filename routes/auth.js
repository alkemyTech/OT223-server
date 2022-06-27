const express = require('express');

const router = express.Router();
const { loginValidation } = require('../middlewares/authValidations');
const controller = require('../controller/authController');
const messages = require('../constant/messages.json');

router.post(
  '/login',
  loginValidation(),
  async (req, res, next) => {
    try {
      return controller.login(req, res);
    } catch (error) {
      return res.status(500).json({
        message: messages.errors.unexpected,
      });
    }
  },
);

module.exports = router;
