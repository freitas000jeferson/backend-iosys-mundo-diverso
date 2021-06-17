module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    'Member',
    {
      partId: {
        type: DataTypes.INTEGER,
        field: 'partId',
      },
      characterId: {
        type: DataTypes.INTEGER,
        field: 'characterId',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'members',
    }
  );

  Member.associate = (models) => {
    models.Member.belongsTo(models.Character, {
      as: 'characters',
      foreignKey: 'characterId',
      sourceKey: 'id',
    });
    models.Member.belongsTo(models.Part, {
      as: 'parts',
      foreignKey: 'partId',
      sourceKey: 'id',
    });
  };

  Member.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Member;
};
