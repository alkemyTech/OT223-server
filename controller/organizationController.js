const service = require('../services/organizations');

const getPublicData = async (req, res) => service.getPublicData(req, res);

const updateData = async (req, res) => service.updateData(req, res);

module.exports = {
  getPublicData,
};
