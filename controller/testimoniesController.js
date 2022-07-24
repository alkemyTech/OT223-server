const service = require('../services/testimonies');

const getAllTestimonies = async () => {
  const response = await service.getAllTestimonies();
  return response;
};

module.exports = {
  getAllTestimonies,
};
