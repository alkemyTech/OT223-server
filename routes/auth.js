const express = require('express');

const { check } = require('express-validator');
const validateFields = require('../middlewares/validateFields');

const router = express.Router();
const controller = require('../controller/authController');

router.post(
  '/login',
  [
    check('email', 'El correo electrónico es obligatorio').not().isEmpty(),
    check('email', 'Correo electrónico no valido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields,
  ],
  async (req, res, next) => {
    try {
      const response = await controller.login(req, res);
      return response;
    } catch (error) {
      return res.status(500).json({
        message: `Por favor, contacte con un administrador. Error: ${error}`,
      });
    }
  },
);

module.exports = router;
