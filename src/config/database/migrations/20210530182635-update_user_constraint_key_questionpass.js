module.exports = {
  up: async (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('users', 'questionpassId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'questionpass',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: null,
        // after: 'can_maintain_system',
      }),
    ]),

  down: async (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn('users', 'questionpassId')]),
};
