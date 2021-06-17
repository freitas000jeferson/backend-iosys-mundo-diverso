module.exports = (sequelize, DataTypes) => {
  const Shape = sequelize.define(
    'Shape',
    {
      name: {
        type: DataTypes.STRING,
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
      tableName: 'shapes',
    }
  );
  Shape.associate = (models) => {
    models.Shape.hasMany(models.Part, {
      as: 'parts',
      foreignKey: 'shapeId',
      sourceKey: 'id',
    });
  };
  Shape.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Shape;
};
