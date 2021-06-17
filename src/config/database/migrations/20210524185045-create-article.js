module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      articleLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'contents', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    queryInterface.dropTable('articles'),
};
