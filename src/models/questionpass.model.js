module.exports = (sequelize, DataTypes) => {
  const Questionpass = sequelize.define(
    'Questionpass',
    {
      question: {
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
      tableName: 'questionpass',
    }
  );
  Questionpass.associate = (models) => {
    models.Questionpass.hasMany(models.User, {
      as: 'questionpass',
      foreignKey: 'questionpassId',
      sourceKey: 'id',
    });
  };
  Questionpass.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Questionpass;
};
