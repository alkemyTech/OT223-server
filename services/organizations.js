const db = require('../models');

const baseOrganization = {
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

const orgStructure = ({
  facebook, instagram, linkedin, ...props
}) => ({
  ...props,
  social_media: {
    facebook,
    instagram,
    linkedin,
  },
});

const getPublicData = async (req, res) => {
  const { id } = req.params;
  const { dataValues } = await db.Organization.findByPk(id);
  if (!dataValues) return baseOrganization;
  return orgStructure(dataValues);
};

module.exports = {
  getPublicData,
};
