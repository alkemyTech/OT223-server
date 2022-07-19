const service = require('../services/organizations');

const getPublicData = async (req, res) => service.getPublicData(req, res);

module.exports = {
  getPublicData,
};
