const express = require('express');
const fileUpload = require('express-fileupload');

const router = express.Router();
const controller = require('../controller/testimoniesController');
const { testimonyValidation } = require('../middlewares/testimoniesValidation');

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
  fileUpload(),
  testimonyValidation(),
  async (req, res, next) => {
    try {
      const testimony = await controller.createTestimony(req, res, next);
      res.json(testimony);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
