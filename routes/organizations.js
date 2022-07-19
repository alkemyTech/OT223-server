const express = require('express');

const router = express.Router();
const controller = require('../controller/organizationController');
const messages = require('../constant/messages.json');

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

module.exports = router;
