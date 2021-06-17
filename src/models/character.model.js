module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    'Character',
    {
      isPublic: {
        type: DataTypes.BOOLEAN,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'userId',
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
      tableName: 'characters',
    }
  );
  Character.associate = (models) => {
    models.Character.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId',
      targetKey: 'id',
    });
    models.Character.hasMany(models.Member, {
      as: 'members',
      foreignKey: 'characterId',
      sourceKey: 'id',
    });
    // models.Character.belongsToMany(models.Part, {
    //   // through: 'members',
    //   as: 'parts',
    //   foreignKey: 'partId',
    // });
  };

  Character.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Character;
};
