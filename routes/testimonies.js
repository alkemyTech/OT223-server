const express = require('express');

const router = express.Router();
const controller = require('../controller/testimoniesController');

router.get('/all', async (req, res, next) => {
  try {
    const response = await controller.getAllTestimonies();
    res.status(200).json(response);
  } catch (error) {

  }
});
module.exports = router;
