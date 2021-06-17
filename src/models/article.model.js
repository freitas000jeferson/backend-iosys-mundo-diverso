module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      name: {
        type: DataTypes.STRING,
      },
      articleLink: {
        type: DataTypes.STRING,
        field: 'articleLink',
      },
      contentId: {
        type: DataTypes.INTEGER,
        field: 'contentId',
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
      tableName: 'articles',
    }
  );

  Article.associate = (models) => {
    models.Article.belongsTo(models.Content, {
      as: 'contents',
      foreignKey: 'contentId',
      targetKey: 'id',
    });
  };

  Article.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };
  return Article;
};
