module.exports = (sequelize, DataTypes) => {
  const Background = sequelize.define(
    'Background',
    {
      name: DataTypes.STRING,
      backgroundLink: {
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
      tableName: 'backgrounds',
    }
  );
  // Background.associate = (models) => {
  //   models.Background.hasMany(models.User, {
  //     as: 'users',
  //     foreignKey: 'background_id',
  //     sourceKey: 'id',
  //   });
  // };

  Background.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Background;
};
