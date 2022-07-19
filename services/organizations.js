const db = require('../models');
const messages = require('../constant/messages.json');

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
  const organization = await db.Organization.findByPk(id);
  if (!organization) return baseOrganization;
  return orgStructure(organization.dataValues);
};

const updateData = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const organization = await db.Organization.findByPk(id);
  if (!organization) {
    throw new Error(messages.errors.noExistingOrganization);
  }
  const newData = await organization.update(data);
  return newData.dataValues;
};

module.exports = {
  getPublicData,
  updateData,
};
