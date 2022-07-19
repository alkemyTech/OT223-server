module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('organizations', [
      {
        name: 'Somos Más',
        image: 'https://i.imgur.com/F9noWYz.png',
        welcome_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut.',
        phone: '1160112988',
        address: 'somosfundacionmas@gmail.com',
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
