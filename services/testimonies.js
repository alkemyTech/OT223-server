const models = require('../models');

const getAllTestimonies = async () => {
  const query = await models.Testimony.findAll();
  const testimonies = query.map((testimony) => testimony.dataValues);
  return testimonies;
};

module.exports = {
  getAllTestimonies,
};
