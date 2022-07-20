const express = require('express');

const router = express.Router();
const controller = require('../controller/organizationController');

const validateJWT = require('../middlewares/validateJWT');
const validateAdminUser = require('../middlewares/validateAdminUser');

router.get(
  '/:id/public',
  async (req, res, next) => {
    try {
      const data = await controller.getPublicData(req, res);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/:id',
  validateJWT,
  validateAdminUser,
  async (req, res, next) => {
    try {
      const newData = await controller.updateData(req, res);
      res.status(200).json({
        ok: true,
        ...newData,
      });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
