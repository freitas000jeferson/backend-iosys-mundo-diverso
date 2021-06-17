module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define(
    'Content',
    {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      videoLink: {
        type: DataTypes.STRING,
        field: 'videoLink',
      },
      imageLink: {
        type: DataTypes.STRING,
        field: 'imageLink',
      },
      isVideo: {
        type: DataTypes.BOOLEAN,
        field: 'isVideo',
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
      tableName: 'contents',
    }
  );

  Content.associate = (models) => {
    models.Content.belongsTo(models.Category, {
      as: 'categorys',
      foreignKey: 'categoryId',
      targetKey: 'id',
    });
    models.Content.hasMany(models.Article, {
      as: 'articles',
      foreignKey: 'contentId',
      sourceKey: 'id',
    });
  };

  Content.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };
  return Content;
};
