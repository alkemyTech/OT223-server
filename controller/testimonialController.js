const service = require('../service/testimonial')
const getAllTestimonials = async () => {
  const response = await service.getAllTestimonials()
  return response
}



module.exports = {
   getAllTestimonials
};