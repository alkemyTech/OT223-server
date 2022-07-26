const express = require('express');

const router = express.Router();
const controller = require('../controller/testimoniesController');

router.get('/all', async (req, res, next) => {
  try {
    const testimonies = await controller.getAllTestimonies();
    res.status(200).json(testimonies);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  async (req, res, next) => {

  },
);

module.exports = router;
