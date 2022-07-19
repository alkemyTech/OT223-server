const express = require('express');

const router = express.Router();
const controller = require('../controller/organizationController');s
const validateJWT = require('../middlewares/validateJWT');

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
  async (req, res, next) => {
    try {
      const newData = await controller.updateData(req, res)
      res.status(204).json(newData)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
