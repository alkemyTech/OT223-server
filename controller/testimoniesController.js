const service = require('../services/testimonies');

const getAllTestimonies = async () => service.getAllTestimonies();

const createTestimony = async (req, res, next) => service.createTestimony(req, res, next);

module.exports = {
  getAllTestimonies,
  createTestimony,
};
