const service = require('../services/auth');

const login = (req, res) => service.login(req, res);

const register = (req, res) => service.register(req, res);

module.exports = {
  login,
  register,
};
