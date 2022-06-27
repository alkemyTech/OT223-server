const service = require('../services/auth');

const login = (req, res) => service.login(req, res);

module.exports = {
  login,
};
