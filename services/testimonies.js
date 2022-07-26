const models = require('../models');
const { uploadFiles } = require('./s3Storage');

const getAllTestimonies = async () => {
  const query = await models.Testimony.findAll();
  const testimonies = query.map((testimony) => testimony.dataValues);
  return testimonies;
};

const createTestimony = async (req, res, next) => {
  const image = await uploadFiles(req.files);
  const testimony = await models.Testimony.create({
    ...req.body,
    image: image.file,
  });
  return testimony;
};

module.exports = {
  getAllTestimonies,
  createTestimony,
};
