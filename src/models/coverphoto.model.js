module.exports = (sequelize, DataTypes) => {
  const Coverphoto = sequelize.define(
    'Coverphoto',
    {
      photoLink: {
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
      tableName: 'coverphotos',
    }
  );

  Coverphoto.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Coverphoto;
};
