module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
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
      tableName: 'categorys',
    }
  );
  Category.associate = (models) => {
    models.Category.hasMany(models.Part, {
      as: 'parts',
      foreignKey: 'categoryId',
      sourceKey: 'id',
    });
    models.Category.hasMany(models.Content, {
      as: 'contents',
      foreignKey: 'categoryId',
      sourceKey: 'id',
    });
  };

  Category.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Category;
};
