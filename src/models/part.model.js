module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define(
    'Part',
    {
      assetLink: {
        type: DataTypes.STRING,
      },
      minAssetLink: {
        type: DataTypes.STRING,
      },
      shapeId: {
        type: DataTypes.INTEGER,
        field: 'shapeId',
      },
      colorId: {
        type: DataTypes.INTEGER,
        field: 'colorId',
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: 'categoryId',
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
      tableName: 'parts',
    }
  );
  Part.associate = (models) => {
    // models.Part.belongsToMany(models.Character, {
    //   // through: 'members',
    //   as: 'characters',
    //   foreignKey: 'characterId',
    // });
    models.Part.hasMany(models.Member, {
      as: 'members',
      foreignKey: 'partId',
      sourceKey: 'id',
    });

    models.Part.belongsTo(models.Color, {
      as: 'colors',
      foreignKey: 'colorId',
      targetKey: 'id',
    });
    models.Part.belongsTo(models.Shape, {
      as: 'shapes',
      foreignKey: 'shapeId',
      targetKey: 'id',
    });
    models.Part.belongsTo(models.Category, {
      as: 'categorys',
      foreignKey: 'categoryId',
      targetKey: 'id',
    });
  };

  Part.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Part;
};
