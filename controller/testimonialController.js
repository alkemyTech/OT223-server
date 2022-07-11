const service = require('../services/testimonial');

const getAllTestimonials = async () => {
  const response = await service.getAllTestimonials();
  return response;
};

module.exports = {
  getAllTestimonials,
};
