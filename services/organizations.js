const db = require('../models');

const getPublicData = async (req, res) => {
  const { id } = req.params;
  const organization = await db.Organization.findByPk(id);
  if (!organization) {
    return {
      name: '',
      image: '',
      welcomeText: '',
      phone: '',
      address: '',
      social_media: {
        instagram: '',
        linkedin: '',
        facebook: '',
      },
    };
  }
  return organization;
};

module.exports = {
  getPublicData,
};
