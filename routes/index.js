const testimonials = require('./testimonial')
const user = require('./users')

const routing = (app) => {
  app.use('/api/testimonials', testimonials);
  app.use('/api/user', user);
  // TODO: here add new router

} 

module.exports = routing;
