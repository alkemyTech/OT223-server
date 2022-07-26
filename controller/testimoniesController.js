const service = require('../services/testimonies');

const getAllTestimonies = async () => service.getAllTestimonies();

module.exports = {
  getAllTestimonies,
};
