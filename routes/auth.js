const express = require('express');

const router = express.Router();
const { loginValidation } = require('../middlewares/authValidations');
const controller = require('../controller/authController');

router.post(
  '/login',
  loginValidation(),
  async (req, res, next) => {
    try {
      return controller.login(req, res);
    } catch (error) {
      return res.status(500).json({
        message: `Por favor, contacte con un administrador. Error: ${error}`,
      });
    }
  },
);

module.exports = router;
