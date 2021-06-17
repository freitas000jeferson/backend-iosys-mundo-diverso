module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('parts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      assetLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      minAssetLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shapeId: {
        type: Sequelize.INTEGER,
        references: { model: 'shapes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: { model: 'colors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'categorys', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('parts'),
};
