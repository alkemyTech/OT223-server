const testimonials = require('./testimonies');
const user = require('./users');
const auth = require('./auth');
const organization = require('./organizations');

const routing = (app) => {
  app.use('/api/testimonies', testimonials);
  app.use('/auth', auth);
  app.use('/api/user', user);
  app.use('/api/organizations', organization);
  // TODO: here add new router
};

module.exports = routing;
