const testimonials = require('./testimonial');
const user = require('./users');
const auth = require('./auth');

const routing = (app) => {
  app.use('/api/testimonials', testimonials);
  app.use('/auth', auth);
  app.use('/api/user', user);
  // TODO: here add new router
};

module.exports = routing;
