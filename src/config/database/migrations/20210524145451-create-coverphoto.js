module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('coverphotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      photoLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.dropTable('coverphotos'),
};
